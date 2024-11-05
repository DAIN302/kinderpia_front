import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// 타입 호출
import { PlaceData } from '../../types/place';
import ReviewInput from '../../components/review/ReviewInput';
import ReviewList from '../../components/review/ReviewList';
import PlaceInfoDetail from '../../components/place/PlaceInfoDetail';
import { getPlace } from '../../api/placelist';

import '../../styles/place/PlaceDetailPage.scss';

const PlaceDetailPage = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [placeDetail, setPlaceDetail] = useState<PlaceData>();
  const navigate = useNavigate();

  console.log('placeID>>', placeId);

  // GET) 장소상세데이터 가져오기
  const getPlaceDetail = async () => {
    try {
      const data = await getPlace(placeId);
      console.log('data.data.place >>>', data.data.place);

      setPlaceDetail(data.data.place);
    } catch (error) {
      console.log('장소목록 가져오는 중 에러 발생!: ', error);
    }
  };

  useEffect(() => {
    if (!placeId) return;
    setIsLoading(true);

    try {
      getPlaceDetail();
    } catch (error) {
      console.error('Error fetching place data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [placeId]);

  if (!placeId) {
    return <div>낫 타당한 접근방법! </div>;
  }

  if (isLoading) {
    return <div>로딩중이여요!</div>;
  }

  if (!placeDetail) {
    // navigate('/not-found', { replace: true });
    return null;
  }

  return (
    <div className="place-detail-page">
      <div className="place-detail-info">
        <PlaceInfoDetail
          placeId={placeDetail.placeId}
          placeName={placeDetail.placeName}
          placeCategoryName={placeDetail.placeCategoryName}
          location={placeDetail.location}
          detailAddress={placeDetail.detailAddress}
          latitude={placeDetail.latitude}
          longitude={placeDetail.longitude}
          paid={placeDetail.paid}
          operatingDate={placeDetail.operatingDate}
          homepageUrl={placeDetail.homepageUrl}
          placeNum={placeDetail.placeNum}
        />
      </div>
      <ReviewInput placeId={placeId} />
      <ReviewList placeId={placeId} />
    </div>
  );
};

export default PlaceDetailPage;
