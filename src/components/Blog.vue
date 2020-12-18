<template>
  <div>
    <b-container class="blog-list">
      <b-row>
        <b-col cols="12" >
          <h1>Home</h1>
        </b-col>
        <b-col cols="12" sm="6" md="4" v-for="item in entries" :key="item.id">
          <a href="" class="blog-cell">
            <figure>
              <img :src="item.img" :alt="item.imgAlt" class="blog-cell__img">
              <figcaption class="blog-cell__caption">
                <div class="blog-cell__content">
                  <h2 class="blog-cell__title">{{item.title}}</h2>
                  <div class="blog-cell__meta">by {{item.author}}</div>
                </div>
              </figcaption>
            </figure>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      entries: [
        {
          id: 1,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/kimon-maritz.jpg',
          imgAlt: 'Random Image',
          title: 'Etiam quis aliquam',
          text: 'Vivamus molestie porta est nec semper. Mauris eget dignissim justo, non ullamcorper libero. Proin congue sapien dolor, a feugiat magna egestas non. Proin ac dolor maximus, semper arcu quis, pulvinar turpis. Nam finibus enim pharetra, posuere nunc sit amet, volutpat lacus. Vivamus viverra nisl in pellentesque pulvinar. Ut finibus sem vitae purus scelerisque posuere. Fusce elementum vel est at suscipit. Pellentesque porttitor ac erat sit amet scelerisque. Vivamus auctor urna in augue ultricies condimentum. Integer dapibus urna ut purus feugiat faucibus. Donec justo dolor, finibus eget auctor sit amet, tincidunt nec justo. Nam cursus bibendum convallis. In tortor ligula, condimentum at quam et, sagittis facilisis ex.',
          author: 'Mesut Ozne',
          date: '23.12.2018'
        },
        {
          id: 2,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/joshua-hibbert.jpg',
          imgAlt: 'Random Image 2',
          title: 'Vestibulum porttitor',
          text: 'Maecenas ultrices purus pulvinar eros porttitor rhoncus. Sed tincidunt orci eget finibus rutrum. Suspendisse ultrices luctus orci id rutrum. Praesent posuere ex a justo cursus tempor. Etiam sollicitudin laoreet massa, eget eleifend quam consectetur in. Curabitur id metus et dui elementum gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum euismod odio at blandit. Proin sit amet quam congue, efficitur sem nec, placerat dolor.',
          author: 'Meryem Serta',
          date: '13.11.2018'
        },
        {
          id: 3,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/etienne-bosiger.jpg',
          imgAlt: 'Random Image 3',
          title: 'Class aptent taciti',
          text: 'Praesent euismod magna non elit efficitur, quis eleifend arcu mollis. Cras nisi lorem, dictum in egestas quis, venenatis id nisl. Pellentesque quis auctor diam. Morbi ut suscipit neque, vitae sollicitudin risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut eros aliquam, pharetra neque lobortis, gravida nunc. Vivamus tincidunt dolor dui, vel rutrum elit lacinia in. Quisque scelerisque ut quam vitae rutrum. Maecenas id ligula id tortor iaculis faucibus quis et velit. Nulla sed condimentum quam, at ultricies urna. Cras in ex vel nunc viverra scelerisque. Aenean luctus porttitor tempor.',
          author: 'Neslihan Resi',
          date: '18.10.2018'
        },
        {
          id: 4,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/karl-magnuson.jpg',
          imgAlt: 'Random Image 4',
          title: 'Curabitur lobortis',
          text: 'Cras porta fermentum justo, auctor vehicula massa commodo in. Aenean vel ante pellentesque, accumsan elit eleifend, gravida urna. Nam libero mi, imperdiet quis orci sit amet, finibus ultrices metus. Etiam et bibendum felis. In cursus dolor et varius tempor. Donec pulvinar risus mauris, eget pulvinar risus malesuada ac. Etiam at pulvinar sapien, sed imperdiet sapien. In vel gravida mauris, sed gravida ante. Suspendisse potenti. Integer et finibus nisi. Proin blandit vestibulum ultricies. Aliquam convallis odio id augue rhoncus, ac luctus ligula efficitur. Nunc sed orci velit. Donec lobortis ipsum ut orci elementum placerat. Maecenas laoreet purus in libero tincidunt, sed eleifend justo blandit.',
          author: 'Burak Merte',
          date: '04.10.2018'
        },
        {
          id: 5,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/steven-pahel.jpg',
          imgAlt: 'Random Image 5',
          title: 'Praesent euismod',
          text: 'Morbi ut suscipit neque, vitae sollicitudin risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut eros aliquam, pharetra neque lobortis, gravida nunc. Vivamus tincidunt dolor dui, vel rutrum elit lacinia in. Quisque scelerisque ut quam vitae rutrum. Maecenas id ligula id tortor iaculis faucibus quis et velit. Nulla sed condimentum quam, at ultricies urna. Cras in ex vel nunc viverra scelerisque. Aenean luctus porttitor tempor. Mauris nec varius tortor, et pellentesque enim. Maecenas nulla enim, pharetra pharetra orci eu, convallis commodo odio. Aenean metus ante, pretium id nunc et, viverra porttitor orci.',
          author: 'Figen Isil',
          date: '22.09.2018'
        },
        {
          id: 6,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/saksham-gangwar.jpg',
          imgAlt: 'Random Image 6',
          title: 'Duis lacinia',
          text: ' Sed erat diam, fermentum non tellus gravida, porttitor laoreet ex. Morbi eget dapibus justo. Pellentesque tempus leo nisi, vel lobortis justo egestas nec. Mauris imperdiet varius turpis, vel pulvinar massa accumsan sed. Donec finibus leo et metus faucibus tincidunt. Phasellus metus metus, rhoncus nec tempus eu, rhoncus aliquam ante. Vestibulum eget tellus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac hendrerit orci, non molestie nisl. Praesent luctus vestibulum tristique. Quisque ex eros, convallis vitae urna vel, varius pretium justo.',
          author: 'Cem Yekta',
          date: '14.09.2018'
        }
      ]
    }
  }
}
</script>

<style>
  .blog-cell {
    position: relative;
    overflow: hidden;
    display: block;
    margin-bottom: 1rem;
  }

  .blog-cell__caption {
    color: white;
    font-weight: bold;
    font-size: 18px;
  }

  .blog-cell__img {
    width: calc(100% + 50px);
    height: auto;
    transition: opacity 0.35s, transform 0.35s;
    opacity: 0.7;
    transform: translate3d(-40px,0,0);
  }

  .blog-cell__title {
    transition: transform 0.35s;
  }

  .blog-cell__content {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2em;
    width: 100%;
    height: 50%;
  }

  .blog-cell__user-link {
    color: white;
  }

  .blog-cell__user-link:hover {
    text-decoration: underline;
    color: white;
  }

  .blog-cell__meta {
    opacity: 0;
    transition: opacity 0.3s, transform 0.35s;
  }

  .blog-cell__title,
  .blog-cell__meta {
    transform: translate3d(0,40px,0);
    text-shadow: 1px 1px 20px #000;
  }

  .blog-cell:hover .blog-cell__img,
  .blog-cell:hover .blog-cell__meta {
    opacity: 0.9;
  }

  .blog-cell:hover .blog-cell__img,
  .blog-cell:hover .blog-cell__title,
  .blog-cell:hover .blog-cell__meta {
    transform: translate3d(0,0,0);
  }

  .blog-cell:hover .blog-cell__meta {
    transition-delay: 0.06s;
  }
</style>
