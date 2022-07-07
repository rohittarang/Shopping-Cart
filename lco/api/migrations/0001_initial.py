from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps,schema_editor):
        user = CustomUser(name="admin",
                        email="admin@gmail.com",
                        is_staff=True,
                        is_superuser=True,
                        phone="8866444352",
                        gender="Male")
        user.set_password("Admin@123#")
        user.save()

    dependencies = []

    operations = [migrations.RunPython(seed_data),]