echo node --version
node --version
echo npm --version
npm --version
echo mongod --version
mongod --version

/usr/bin/supervisord -c /etc/supervisord.conf

echo Supervisord Started.
echo Starting Shell ...
/bin/sh
