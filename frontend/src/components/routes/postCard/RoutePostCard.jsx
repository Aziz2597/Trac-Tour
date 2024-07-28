import RouteCardHeader from './RouteCardHeader'
import RouteCardDetails from './RouteCardDetails'
import RouteCardActions from './RouteCardActions'
import RouteCardDescription from './RouteCardDescription'
import RouteCardMap from './RouteCardMap'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../features/users/userSlice'

const RoutePostCard = ({ route }) => {
	const currentUser = useSelector(selectCurrentUser)
	const userId = currentUser?._id
	
	// Ensuring currentUser is not null before accessing properties
	const isInitiallyLiked = currentUser && route.likes.includes(userId)

	return (
		<div className='route-card'>
			<RouteCardHeader
				profilePicture={route.creator.profilePicture || 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} 
				name={route.creator.username}
				createdAt={route.createdAt}
				creatorId={route.creator._id}
				creatorUsername={route.creator.username}
			/>
			<div className='route-card-map-main'>
				<RouteCardMap
					startPoint={route.startPoint}
					endPoint={route.endPoint}
					waypoints={route.waypoints}
				/>
				<RouteCardDetails
					totalDistance={route.totalDistance}
					totalTime={route.totalTime}
					vehicleType={route.vehicleType}
				/>
			</div>
			<RouteCardDescription description={route.description} />
			<RouteCardActions
				routeId={route._id}
				initialLikes={route.likes.length}
				isInitiallyLiked={isInitiallyLiked}
				currentUser={currentUser}
			/>
		</div>
	)
}

export default RoutePostCard
