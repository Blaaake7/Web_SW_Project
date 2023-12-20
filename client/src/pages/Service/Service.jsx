import React, { useEffect, useState } from 'react'
import styles from './Service.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const dummy = [
  {
    "serviceId": 1,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 2,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 3,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 4,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 5,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 6,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 7,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 8,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
  {
    "serviceId": 9,
    "serviceName": "12월 네일 특가",
    "price": 20000,
    "info": "기본 네일을 저렴하게 이용하실 수 있는 특가 상품입니다.",
    "timeTaken": 50,
    "course": [
      {
        "courseId": 1,
        "courseTitle": "손톱 기본 관리",
        "courseInfo": "손톱 기본관리 해주는 서비스 입니다.",
        "price": 10000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTNfNDYg%2FMDAxNjc2MjU3MDQ1Mjk3.Udm_g3l9ImHW6lahUaFQkGpHcLWedALh1Cmg-Sd9d4Ag.4hUPSw0t0f6JvaF70FXNUC5o3gO2uk1SDYWHxa5oQHsg.JPEG.thwls8909%2F5E01D3FE-9837-4A47-A0C4-0816F781E193.jpeg&type=a340"
      },
      {
        "courseId": 2,
        "courseTitle": "젤 제거",
        "courseInfo": "기존에 고객님께서 하고 계셨던 젤을 제거하는 서비스 입니다.",
        "price": 15000,
        "imageURL": "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODExMDNfMSAg%2FMDAxNTQxMjU0NjIzNjQx.DG7InkL16Gp1-ujhDNp01UXe6sNCnu9VAnnjyjHlDFEg.M9tTrLxlUXrT_M01Iwq4pMhOq1UKXe70tfTvStxf-YAg.JPEG.magnolia0331%2F20181028_210140.jpg&type=ofullfill340_600_png"
      }
    ],
    "picture": "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8679645%2F86796451238.2.jpg&type=f372_372"
  },
]



export default function Service() {
  const [serviceData, setServiceData] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  

  // API 연결되면 데이터 받아오기
  // useEffect(() => {
  //   axios.get('http://43.202.228.228:8080/service')
  //   .then(response => {
  //     console.log(response.data);
  //     setServiceData(response.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  const navToDetail = (service) => {
    navigate(`/service/${service.serviceId}`, {
      state: {
        serviceName: service.serviceName,
        info: service.info,
        price: service.price,
        timeTaken: service.timeTaken,
        course: service.course,
        picture: service.picture
      },
    });
  }

  return (
    <div className={styles.wrapper}>
      {dummy && dummy.map((service, idx) => (
        <div
        key={idx}
        className={`${styles.serviceWrapper} ${hoveredIndex === idx ? styles.hovered : ''}`}
        onMouseEnter={() => handleMouseEnter(idx)}
        onMouseLeave={handleMouseLeave}
        onClick={() => navToDetail(service)}
      >
          <img src={service.picture} alt='Service Image' className={styles.serviceImg} />
          <div key={idx} className={styles.serviceName}>{service.serviceName}</div>
          <div key={idx} className={styles.info}>{service.info.length > 18 ? `${service.info.substring(0, 18)}...` : service.info}</div>
          <div key={idx} className={styles.price}>{service.price}원</div>
        </div>
      ))}
    </div>
  )
}
