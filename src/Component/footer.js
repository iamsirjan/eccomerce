import React from "react";
import "../Style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="footer_list">
          <p>Services</p>
          <span>buy and sell</span>
          <span>Shiiping</span>
          <span>Shipping outside valley</span>
          <span>Help center</span>
          <span>Customer care</span>
        </div>

        <div className="footer_list">
          <p>Services</p>
          <span>buy and sell</span>
          <span>Shiiping</span>
          <span>Shipping outside valley</span>
          <span>Help center</span>
          <span>Customer care</span>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_list">
          <p>Services</p>
          <span>buy and sell</span>
          <span>Shiiping</span>
          <span>Shipping outside valley</span>
          <span>Help center</span>
          <span>Customer care</span>
        </div>
      </div>
      <div className="footer_pay">
        <span>Pay us with:</span>
        <div className="footer_pay_img">
          <img src="data:image/png;base64,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" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///9fJZ9SAJldIZ5aGp1YFZxTAJlWDZvEttlOAJddIJ5WD5ujjMTu6vT59/tnM6OQc7m9rtTn4e+Ob7jc1OhqOqW5qNJ6Uq11S6vz8Pexnc2La7fXzuVlL6KqlcmdhMHRxuFxRKjJvNx+WbDi2+yumsuXfL5pOKSBXbGhicOGZLR0SapDAJK6qtOTeLtiKqD6mMg/AAAHz0lEQVR4nO2baWPqKBRAlSUIial7XzRGq9a2Tmv//7+bsJhAQpz2Geub5z3fSijCkeVCsNMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD+KuN9P4ltX4s8hnS+WXIFexvPJratzezYLHlCCuxpMQoQG61tX6pbEGQtItwpBZH7rmt2MZx7imhEFQ7NbV+4mpDj0C1GDiC13t67gz7PiDX3kZIVnt67iDxM/Mav9Qvj8BNtb1/JHSUQ5tYqQPx0I9UihD3cUsfRDUa4y22GSJ70FHimkezdSYlIqwVOTOGA+KQ83regPMrVjEvZsUh+9w+dO5pSjuwbzyKS/CI+U4C5WnzWvNBut9IOY+lYffg9xSj1SCwb6yahqS4KXt63uT/DmmTbYQj9LfVLYXx/mJ75md8NX/bTnexrctsbXZ+VbXfL15VE/zpCno/ztu2RvN5FSnvRzX5hCb1vlazO0m8y4DU1Uji0Vgrq9JVjXC9r1stVgn22KQLf/9DRdJG3XN05n0X6wmqdtF2zxaMUgbNOJHcpsE6e3kHGllOErR4xSQijjh75O66HcZbtrVJJNecDkx4QIXS1Oiu2hg/rNGTNn2uHuwzm3zBKu16We1MjPFPl9lsz+BsWozbJLNvb3j858yMyJYpDbdSvLuZZyBSfuKaBot/ACpzXhmcDDdRK6K0+kSgkR50zVmku5V3Ci4moccI7UB4qXNgsv+OVsaVC06enIfd3b5PT0FBll2fPU+YrIwilFOQk/+nG/h2WB5NC5mhP8kibxKFJjHm3aLP1EJfrIp0g9dU0Ry3nXg4lTWtn5YPfIQDnhSmCsTuh4fDUnQgdOG1lz8dpm6Ya4Fp2YUaH7j5lgPGGbO8laTvQgk4u1dpInJv3aQVTcr6fl+eor9yhNd2VOy4muYVGNeJdn/G7r/Yxqzf2qE6dJtpOJzM0+jBOyn8pQ5+HZyr0ehzJN7MuJejI/CBUTvURWx1rnK3wQID4depzYnzl80hm36xac7H7biTMm7Pqpridna+Wkq98oYhaevsX+FJk0wrfabIpQaE61MC3fDrxykyiCl6TmpBya/WVgZkXB3XnuD3VyApv/GDmhjFBSxs5SjsxBxS8rlXSbnSRO0HL4PzjBQleZ6LZ8qr8w0ZM2USeZA9UfBDGvqblaTWbqjFywQAUlYdTo5FX9NwkC5ZCvL3Vyhfmk4gR9bh+RqrU6n+upltLlajVVj/nk5ET8Or4d1esD/CnLUfEQ3a7TmWoranKiz73QPk0jtRRdfF5cX3fopetO4jhBahpRjVa2X2W5dC8TM/mcvpnHWMdf/whjb1c2sC9LRJOKk6FxotY5mpWaLnVSb64uvbMgZ500xyd6t5DvJp34RPYOFecFltDPUwuVE13iRGZgQ/PfZv8tK8N6FSeqhnlJe1J+Nuue36B8jV/Vo3miZ7ghP+uksjHWTtRwirsqZhu5Trb5xwh5ICOLNV1Cq1i6TlQG+b3M2Klz6OLVvkM50YNDHayLaelG8iROPfMSaoexejB3OgfOGHpvcuLb75BjOtrNqJSsNiK2kzExL9NUS8xp1ZGYj6s5iUzoZ9rnOOni+W6U7tV3Jg/82neyqZ2icdP3RpveKaaqO6nsi/UekAR5nKHLWLfjBD+8SD67tpN8r4n0xSEsD4aVE6zyTbvdNpzUT6jJsZap7qQykUVub2NqZLXgpIsVXddJWYv1yYmV8XIn9QlFL4/nnVTP2Rwn2ASTbTgh7ASvORFcTrvGCS0yvl/uZFgbPLhmuuakeh6rnQSUEEIR6XXackL2w4LOyQmRh48k5I96kCsndF7k612sxHduj3lkNqhmo1pfsCtl6POTXTZeDLJipmnBSVA5iZZOyH69Wiz2s9OSa8+xbeF7v0P5P/ssOk4b1p2w+n5HOUGVxEYnXaEzHIRJ9DlR/TeoDGPphK7ctPEVnPjfA+abD0pEQ3xSbf03nCxl79erViKLVSdyPidrGbzR0x7ZdAqfE3V4XnSoli44R823Hf1O6q8Bv+5E90r2MRptZBir3z37nOgeheQ0Eq+3XAevPifqlTYWUkYyfHl/7rSC/+VooxPPvYKvOzE3FfIQw5xmx01OjD007fJAmO2uz4m+JYMRnVLOxCnKv5Ta/ZPzTupr9TecdFbONTn91sPrpGPuk2Grb3qd7HT1TXjiqd1vcWwaPWaYOk5895T0fueMk4gV25xxeQ0Xc92+MSl7nzzi1k76pKgWpvrr9zrJv9Pi6hkOptWnv4tzn83CrJq2k9N9A4eMo3wwVKv6nie+63OWeMkRN0vwBqOQqAhjudYp0TvnfFv+FzeTQhbIF66UoTDSxeD8c4qbZSXJmAchpSHjy/auxtj3Hl0pbDwYPNmnhf57j5Oc2kDe5Yl9K0dxDDWZHw+H/bwMDZOcoi55zuJB+pFFz70iYzKxH9oNWM+yaL5p9cWJfT/WJf9CbSWfd3M/1r1H3cxd3aOu3rf3c2f37Tv//bsMcXe/y8hJxZmugoOHe7gXWydr+p0XZsFffwG0Cfg9oJfNgucxFfxutEI6XzyYu4/w+2Ib+B06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyDfwGKoHemMffZkwAAAABJRU5ErkJggg==" />
        </div>
      </div>
      <div className="footer_pay">
        <span>Download our app:</span>
        <div className="footer_pay_imgapp">
          <img src="https://thumbs.dreamstime.com/b/google-play-app-store-icons-google-play-app-store-icons-editable-vector-illustration-isolated-white-background-123024624.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
