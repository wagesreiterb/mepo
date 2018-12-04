from django.shortcuts import redirect
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.contrib.auth.models import User
from django.http import JsonResponse


def validate_username(request):
    username = request.GET.get('username', None)
    data = {
        'is_taken': User.objects.filter(username__iexact=username).exists()
    }
    if data['is_taken']:
        data['error_message'] = 'A user with this username already exists.'
    return JsonResponse(data)


class SignUpView(CreateView):
    template_name = 'mepo/signup.html'
    form_class = UserCreationForm


class HomeView(LoginRequiredMixin, TemplateView):
    login_url = 'mepo:login'
    redirect_field_name = 'redirect_to'

    template_name = 'mepo/home.html'


class BledView(LoginRequiredMixin, TemplateView):
    login_url = 'mepo:login'
    redirect_field_name = 'redirect_to'

    template_name = 'mepo/bled.html'


class Error404View(LoginRequiredMixin, TemplateView):
    login_url = 'mepo:login'
    redirect_field_name = 'redirect_to'

    template_name = 'mepo/error_404.html'


#https://www.youtube.com/watch?v=qwE9TFNub84
class TestView(TemplateView):
    template_name = 'mepo/formtest.html'

    def get(self, request):
        form = TestForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = TestForm(request.POST)
        if form.is_valid():
            form.save()
            text = form.cleaned_data['post']
            form = TestForm()
            return redirect('mepo:formtest')

        args = {'form': form, 'text': text}
        return render(request, self.template_name, args)

