# inbound-labspace-web
Web frontend repo

```
mkdir inbound-labspace-web
cd ~/inbound-labspace-web/
git clone https://github.com/Inbound-Tech/inbound-labspace-web.git dist
cp dist/local.js .
cp dist/package.json .
# ps aux | grep local_http.js | awk '{print $2}' | xargs sudo kill -9

cd ~/inbound-labspace-web/
# ps aux | grep local.js | awk '{print $2}' | xargs sudo kill -9
# sudo npm run server &

# sudo forever start --uid "inbound-labspace-web" -c "sudo npm run server" ./
sudo forever restart inbound-labspace-web
sudo forever list
sudo tail -f /root/.forever/inbound-labspace-web.log

# pm2 start npm --name inbound-labspace-web -- run server
# pm2 restart inbound-labspace-web
```
