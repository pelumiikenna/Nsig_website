from django.shortcuts import render,get_object_or_404,redirect
from django.views.generic import (TemplateView,ListView, DetailView,DeleteView, CreateView,UpdateView)
from .models import Post, Comment
from .forms import PostForm, CommentForm,CreateUsers
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy, reverse
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .decorators import already_authenticated, auth_required
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import Group, User
from django.utils.html import strip_tags, format_html
from django.contrib import messages

# Create your views here.

class AboutView(TemplateView):
    template_name='nsig_blog/about.html'


@already_authenticated
def register_users(request):
    form = CreateUsers()
    
    if request.method == 'POST':
        form = CreateUsers(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            username = form.cleaned_data.get('username')
            messages.info(request, f'{username} successfully registerred, please login!')
            return redirect('nsig_blog_login')
    context= {'form': form}
    return render(request,'registration/register.html', context)


## User login
@already_authenticated
def login_users(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username = username, password = password)

        if user != None:
            # add groups to already exiting users without user profiles
            group_member, created = Group.objects.get_or_create(name='member')
            group_exco, created1 = Group.objects.get_or_create(name='exco')
            if len(Group.objects.filter(user = user)) == 0:
                if user.is_staff:
                    user.groups.add(group_exco)
                else:
                    user.groups.add(group_member)
            # add is active logic here
            if user.is_active:
                login(request, user)
                return redirect('post_list')
        else:
            messages.info(request,format_html('username or password is incorrect, try again! or <a href="{}">register</a> if you do not have an account yet' , reverse('nsig_blog_register')))
                
    return render(request, 'registration/login.html')


## User logout
def logout_users(request):
    logout(request)
    return render(request, 'registration/logout.html')



class PostListView (ListView):
    model=Post
    paginate_by = 6

    def get_queryset(self):
        return Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')


class PostDetailView (DetailView):
    model=Post


class PostCreateView (LoginRequiredMixin, CreateView):
    login_url='/account/login/'
    form_class= PostForm
    redirect_field_name='nsig_blog/post_detail.html'
    model=Post
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    # def post(self, request):
    #     if request.method == 'POST':
    #         form = PostForm(request.POST)
    #         if form.is_valid():
    #             postform =form.save(commit=False)
    #             postform.author = request.user
    #             postform.save()

class PostUpdateView (LoginRequiredMixin, UpdateView):
    login_url='/account/login/'
    form_class= PostForm
    redirect_field_name='nsig_blog/post_detail.html'
    model=Post

class PostDeleteView (LoginRequiredMixin, DeleteView):
    model=Post
    success_url=reverse_lazy('post_list')

class PostDraftView (LoginRequiredMixin, ListView):
    login_url='/account/login/'
    # redirect_field_name = 'Blog/post_list.html'

    template_name = 'nsig_blog/post_draft.html'

    context_object_name = 'post_draft'
    model=Post

    def get_queryset(self):
        return Post.objects.filter(published_date__isnull=True).order_by('create_date')

# class PostDraftView(TemplateView):

#     template_name = 'nsig_blog/post_draft.html'

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['post_draft'] = Post.objects.filter(published_date__isnull=True).order_by('create_date')
#         return context

@login_required
def add_comment_to_post(request,pk):
    post=get_object_or_404(Post,pk=pk)
    if request.method =='POST':
        form=CommentForm(request.POST)
        if form.is_valid():
            comment=form.save(commit=False)
            comment.post=post
            comment.save()
            return redirect('post_detail',pk=post.pk)
    else:
        form=CommentForm()
    return render(request,'Blog/comment_form.html',{'form':form})

@login_required
def comment_approve(request,pk):
    comment=get_object_or_404(Comment,pk=pk)
    comment.approve()
    return redirect('post_detail',pk=comment.post.pk)

@login_required
def comment_remove(request,pk):
    comment=get_object_or_404(Comment,pk=pk)
    post_pk= comment.post.pk
    comment.delete()
    return redirect('post_detail',pk=post_pk)

@login_required
def post_publish(request,pk):
    post= get_object_or_404(Post,pk=pk)
    post.publish()
    return redirect('post_detail',pk=pk)

