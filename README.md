# inbound-labspace-web
Web frontend repo

```
mkdir inbound-labspace-web
cd inbound-labspace-web/
git clone https://github.com/Inbound-Tech/inbound-labspace-web.git dist
cp dist/local.js .
cp dist/package.json .
# ps aux | grep local_http.js | awk '{print $2}' | xargs sudo kill -9
pm2 start npm --name inbound-labspace-web -- run server
# pm2 restart inbound-labspace-web
```
