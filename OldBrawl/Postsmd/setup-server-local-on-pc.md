## Запуск сервера на компьютере

1. Качаем Python3:
[Windows](https://apps.microsoft.com/detail/9nrwmjp3717k?ocid=webpdpshare)
[Mac](https://www.python.org/downloads/macos/)
Linux 
```sh
sudo apt install python3 pip3
```
2. Устанавливаем tinydb:

```pip
pip3 install tinydb
```
3. Запускаем сам сервер из терминала (CMD - на windows):
```sh
cd /путь/до/папки/с/сервером
```

```Python 3
python3 ./main.py
```
4. Меняем ip в файле клиента:
откройте apk с помощью apk editor, после чего перейдите по пути /lib/armeabi-v7a/, найдтите файл "libgg.config.so", затем измините параметр "redirectHost"

