import backTop from 'components/content/backTop/backTop'
export const backTopMixin = {
  data() {
    return {
      isChange: true,
    }
  },
  components: {
    backTop,
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500);
    },
  }
}
