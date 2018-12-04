from . import views

from django.conf.urls import url
from django.contrib.auth.views import LoginView, LogoutView

app_name = 'mepo'

urlpatterns = [
    url(r'^login$', LoginView.as_view(), name='login'),
    url(r'^logout$', LogoutView.as_view(), {'next_page': LoginView.as_view()}, name='logout'),
    url(r'^bled$', views.BledView.as_view(), name='bled'),
    url(r'^formtest$', views.TestView.as_view(), name='formtest'),
    url(r'^signup$', views.SignUpView.as_view(), name='signup'),
    url(r'^mepo/validate_username$', views.validate_username, name='validate_username'),
    # Admin
#    url(r'^admin', admin.site.urls),
    # Startseite
    url(r'^home$', views.HomeView.as_view(), name='home'),
    url(r'^$', views.HomeView.as_view(), name='home'),

    # Error View
    url(r'^.+$', views.Error404View.as_view(), name='error_404'),
]

