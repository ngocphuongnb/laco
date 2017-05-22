FROM mhart/alpine-node:6.10.3

ADD . /opt/app
#ADD node_modules/laco /tmp/node_modules/laco

RUN rm -rf /opt/app/node_modules/laco/node_modules


# Installing graphicsmagick
ENV PKGNAME=graphicsmagick
ENV PKGVER=1.3.23
ENV PKGSOURCE=http://downloads.sourceforge.net/$PKGNAME/$PKGNAME/$PKGVER/GraphicsMagick-$PKGVER.tar.lz

# RUN apk add --update graphicsmagick --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted
#
# Installing graphicsmagick dependencies
RUN apk add --update g++ \
                     gcc \
                     make \
                     lzip \
                     wget \
                     automake \
                     autoconf \
                     nasm \
                     libjpeg-turbo-dev \
                     libpng-dev \
                     libtool \
                     libgomp \
                     nginx
RUN wget --no-check-certificate $PKGSOURCE && \
    lzip -d -c GraphicsMagick-$PKGVER.tar.lz | tar -xvf - && \
    cd GraphicsMagick-$PKGVER && \
    ./configure \
      --build=$CBUILD \
      --host=$CHOST \
      --prefix=/usr \
      --sysconfdir=/etc \
      --mandir=/usr/share/man \
      --infodir=/usr/share/info \
      --localstatedir=/var \
      --enable-shared \
      --disable-static \
      --with-modules \
      --with-threads \
      --with-gs-font-dir=/usr/share/fonts/Type1 \
      --with-quantum-depth=16 && \
    make && \
    make install && \
    cd / && \
    rm -rf GraphicsMagick-$PKGVER && \
    rm GraphicsMagick-$PKGVER.tar.lz

RUN cd /opt/app && npm install --production

RUN apk del g++ \
            gcc \
            make \
            lzip \
            automake \
            autoconf \
            wget

WORKDIR /opt/app

EXPOSE 2811

CMD ["./laco", "start"]