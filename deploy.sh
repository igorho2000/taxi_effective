echo "Building the app..."

npm run build
tar zcfv dist.tar.gz dist

echo "Transferring to Official 1..."
scp dist.tar.gz official_1:~/
echo "Success!"

echo "Transferring to Official 2..."
scp dist.tar.gz official_2:~/
echo "Success!"

REMOTE_COMMAND="
mv dist.tar.gz /opt/nginx/html/.
cd /opt/nginx/html
tar xmzf dist.tar.gz
rm -rf taxi_effective
mv dist taxi_effective
rm -rf dist.tar.gz
ls
exit
"

echo "Deploying in Official 1..."
ssh official_1 "$REMOTE_COMMAND"

echo "Deploying in Official 2..."
ssh official_2 "$REMOTE_COMMAND"

echo "Deployment Completed!"