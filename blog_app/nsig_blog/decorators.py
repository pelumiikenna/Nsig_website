from django.http import HttpResponse
from django.shortcuts import redirect


## redirect to home page when users is already authenticated
def already_authenticated(in_func):
    def wrapper_func(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('post_list')
        else:
            return in_func(request, *args, **kwargs)

    return wrapper_func

## redirect to home page when users is not authenticated
def auth_required(in_func):
    def wrapper_func(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('post_list')
        else:
            return in_func(request, *args, **kwargs)

    return wrapper_func

## redirect to home page when users is not admin
def not_admin(in_func):
    def wrapper_func(request, *args, **kwargs):
        if not request.user.is_staff:
            return redirect('post_list')
        else:
            return in_func(request, *args, **kwargs)

    return wrapper_func