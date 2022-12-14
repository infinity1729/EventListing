import os
def rename(instance,filename):
    extension=filename.split('.')[-1]
    folder='media'
    return os.path.join(folder,'{}.{}'.format(instance.pk,extension))
