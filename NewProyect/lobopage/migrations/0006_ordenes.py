# Generated by Django 4.1.2 on 2024-06-17 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lobopage', '0005_cliente_alter_producto_descripcion_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ordenes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=5, null=True)),
            ],
        ),
    ]
