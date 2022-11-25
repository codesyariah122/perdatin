import { date } from "quasar";
export const myMixins = {
  data() {
    return {
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
    };
  },

  methods: {
    getConvertDate(waktu) {
      if (waktu) {
        return date.formatDate(waktu, "DD MMMM YYYY", {
          months: this.months,
        });
      } else {
        return 0;
      }
    },
  },
};
