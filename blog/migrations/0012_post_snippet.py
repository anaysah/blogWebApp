# Generated by Django 4.1.7 on 2023-03-19 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0011_alter_post_body'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='snippet',
            field=models.CharField(default='this is a dummy code', max_length=255),
            preserve_default=False,
        ),
    ]