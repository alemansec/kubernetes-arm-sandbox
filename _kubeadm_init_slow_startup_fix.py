#!/usr/bin/env python
#
# run me with sudo python foobar.py
#
import os
import time
import threading

filepath = '/etc/kubernetes/manifests/kube-apiserver.yaml'

def replace_defaults():
    print('Thread start looking for the file')
    while not os.path.isfile(filepath):
        time.sleep(1) #wait one second
    print('\033[94m -----------> FILE FOUND: replacing defaults \033[0m')
    os.system("""sed -i 's/failureThreshold: [0-9]/failureThreshold: 18/g' /etc/kubernetes/manifests/kube-apiserver.yaml""")
    os.system("""sed -i 's/timeoutSeconds: [0-9][0-9]/timeoutSeconds: 20/g' /etc/kubernetes/manifests/kube-apiserver.yaml""")
    os.system("""sed -i 's/initialDelaySeconds: [0-9][0-9]/initialDelaySeconds: 240/g' /etc/kubernetes/manifests/kube-apiserver.yaml""")

t = threading.Thread(target=replace_defaults)
t.start()
os.system("kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=10.13.1.24")

