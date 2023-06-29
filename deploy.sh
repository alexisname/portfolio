echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i ~/.ssh/ssh-key-2023-06-29.key -r build/* ubuntu@129.146.130.124:/var/www/129.146.130.124/

echo "Done!"