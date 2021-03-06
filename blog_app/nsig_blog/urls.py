
from django.urls import path
from nsig_blog import views


urlpatterns = [
    path('',views.PostListView.as_view(),name='post_list'),
    path('account/logout/',views.logout_users,name='nsig_blog_logout'),
    path('account/login/',views.login_users,name='nsig_blog_login'),
    path('account/register/',views.register_users,name='nsig_blog_register'),
    path('post/<int:pk>/',views.PostDetailView.as_view(),name='post_detail'),
    path('post/new/',views.PostCreateView.as_view(),name='post_new'),
    path('post/<int:pk>/edit/',views.PostUpdateView.as_view(),name='post_edit'),
    path('post/<int:pk>/remove/',views.PostDeleteView.as_view(),name='post_remove'),
    path('drafts/',views.PostDraftView.as_view(),name='post_draft'),
    # path('post/<int:pk>/comment/',views.add_comment_to_post,name='add_comment_to_post'),
    # path('comment/<int:pk>/approve/',views.comment_approve,name='comment_approve'),
    path('comment/<int:pk>/remove/',views.comment_remove,name='comment_remove'),
    path('post/<int:pk>/publish/',views.post_publish,name='post_publish'),
    path('post/<int:pk>/hide/',views.hide_post,name='hide_post'),
    path('post/<int:pk>/unhide/',views.unhide_post,name='unhide_post'),
    
]