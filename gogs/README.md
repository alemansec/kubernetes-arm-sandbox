
WARNINGS:
- does not use secrets yet
- uses emptyDir for storage, meaning you'll lose everything on teardown :)

```
  # edit gogs/gogs_and_pg_on_emptydir.yml (captain obvious still, but..)
  kubectl apply -f gogs/gogs_and_pg_on_emptydir.yml
```

then visit http://<gogs_ingress_host>/ (see Ingress rule in gogs/gogs_and_pg_on_emptydir.yml )


db type: postgres
host: 127.0.0.1:5432
user: gogs
pass: gogsdbpwd
db name: gogs
app url: http://<gogs_ingress_host>/

admin user: admin user to create (avoir 'admin' ; its reserved/forbidden by gogs)


