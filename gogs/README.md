
WARNINGS:
- does not use secrets yet
- uses emptyDir for storage, meaning you'll lose everything on teardown :)

```
  # edit gogs/gogs_and_pg_on_emptydir.yml (captain obvious still, but..)
  kubectl apply -f gogs/gogs_and_pg_on_emptydir.yml
```

then

```
  kubectl get svc
  # EXTERNAL-IP + PORT
  # --> visit http://EXTERNAL-IP:PORT/
  # http://192.168.100.81/
```

db type: postgres
host: 127.0.0.1:5432
user: gogs
pass: gogsdbpwd
db name: gogs
app url: http://192.168.100.81/

admin user: admin user to create (avoir 'admin' ; its reserved/forbidden by gogs)


