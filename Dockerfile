FROM node:12
ENV USER=app
ENV SUBDIR=app
RUN useradd --user-group --create-home --shell /bin/false $USER &&\
  npm install --global tsc-watch npm ntypescript typescript gulp-cli concurrently

ENV HOME=/home/$USER
RUN chown -R $USER:$USER $HOME
USER $USER
WORKDIR $HOME/$SUBDIR
RUN npm install
