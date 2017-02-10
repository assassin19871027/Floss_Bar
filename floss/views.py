from django.shortcuts import render

# Create your views here.


def show_index(request):
    context = {}
    return render(request, 'floss/index.html', context)
