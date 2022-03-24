FROM gitpod/workspace-full

RUN bash -c "apk add --update python make g++\
              && rm -rf /var/cache/apk/*
            . .nvm/nvm.sh \
             && nvm install v12 && nvm alias default v12 \
             && nvm use default && npm i -g yarn"