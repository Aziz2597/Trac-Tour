// PS C:\Users\azizu\Desktop\trip-track\frontend\src> node generateTree.mjs
// ├── api
// │   └── baseApiSlice.jsx
// ├── app
// │   └── store.js
// ├── App.jsx
// ├── assets
// │   ├── images
// │   │   └── nav-logo.png
// │   └── react.svg
// ├── components
// │   ├── common
// │   │   ├── Checkbox.jsx
// │   │   ├── InputBox.jsx
// │   │   ├── Select.jsx
// │   │   └── Textarea.jsx
// │   ├── layout
// │   │   ├── Header.jsx
// │   │   └── MainLayout.jsx
// │   ├── Navbar.jsx
// │   └── routes
// │       ├── Autocomplete.jsx
// │       ├── LocationInput.jsx
// │       ├── Map.jsx
// │       ├── postCard
// │       │   ├── RouteCardActions.jsx
// │       │   ├── RouteCardDescription.jsx
// │       │   ├── RouteCardDetails.jsx
// │       │   ├── RouteCardHeader.jsx
// │       │   ├── RouteCardMap.jsx
// │       │   └── RoutePostCard.jsx
// │       ├── RoutingMachine.jsx
// │       └── Waypoint.jsx
// ├── features
// │   ├── auth
// │   │   ├── authApiSlice.jsx
// │   │   ├── authSlice.jsx
// │   │   └── PersistLogin.jsx
// │   ├── routes
// │   │   └── routesApiSlice.jsx
// │   └── users
// │       └── usersApiSlice.jsx
// ├── generateTree.mjs
// ├── hooks
// │   ├── useAuth.js
// │   ├── useDebounce.js
// │   └── usePersist.js
// ├── index.css
// ├── main.jsx
// ├── pages
// │   ├── auth
// │   │   ├── AuthLayout.jsx
// │   │   ├── Login.jsx
// │   │   └── Register.jsx
// │   ├── feed
// │   │   └── Feed.jsx
// │   └── routes
// │       └── CreateRoute.jsx
// ├── routes.jsx
// └── utils
//     └── formatters.js

// frontend\src\api\baseApiSlice.jsx:
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { setCredentials, logOut } from '../features/auth/authSlice'

// const baseQuery = fetchBaseQuery({
// 	baseUrl: 'http://localhost:3500',
// 	credentials: 'include',
// 	prepareHeaders: (headers, { getState }) => {
// 		const token = getState().auth.token

// 		if (token) {
// 			headers.set('authorization', `Bearer ${token}`)
// 		}
// 		return headers
// 	},
// })

// const baseQueryWithReauth = async (args, api, extraOptions) => {
// 	let result = await baseQuery(args, api, extraOptions)

// 	if (result?.error?.status === 403) {
// 		console.log('sending refresh token')

// 		const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)

// 		if (refreshResult?.data) {
// 			api.dispatch(setCredentials({ ...refreshResult.data }))
// 			result = await baseQuery(args, api, extraOptions)
// 		} else {
// 			api.dispatch(logOut())
// 			if (refreshResult?.error?.status === 403) {
// 				refreshResult.error.data.message = 'Your login has expired. '
// 			}
// 			return refreshResult
// 		}
// 	}

// 	return result
// }

// export const baseApiSlice = createApi({
// 	baseQuery: baseQueryWithReauth,
// 	tagTypes: ['Routes', 'User'],
// 	endpoints: (builder) => ({}),
// })


// frontend\src\app\store.js:
// import { configureStore } from '@reduxjs/toolkit'
// import { baseApiSlice } from '../api/baseApiSlice'
// import authReducer from '../features/auth/authSlice'

// export const store = configureStore({
// 	reducer: {
// 		[baseApiSlice.reducerPath]: baseApiSlice.reducer,
// 		auth: authReducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(baseApiSlice.middleware),
// 	devTools: true,
// })



// frontend\src\components\common\Checkbox.jsx:
// const Checkbox = ({ id, label, checked, onChange }) => {
// 	return (
// 		<div className='checkbox'>
// 			<label htmlFor={id} className='checkbox-label'>
// 				<input
// 					type='checkbox'
// 					id={id}
// 					className='checkbox-input'
// 					checked={checked}
// 					onChange={onChange}
// 				/>
// 				{label}
// 			</label>
// 		</div>
// 	)
// }

// export default Checkbox



// frontend\src\components\common\InputBox.jsx:
// import { useState } from 'react'

// export const InputBox = ({
// 	name,
// 	type,
// 	id,
// 	defaultValue,
// 	placeholder,
// 	icon,
// 	value,
// 	onChange,
// 	regex,
// 	validationMessage,
// 	showValidation,
// 	onFocus,
// 	onBlur,
// }) => {
// 	const [passwordVisible, setPasswordVisible] = useState(false)
// 	return (
// 		<div className='inputBox'>
// 			<div className='inputBox-wrapper'>
// 				<input
// 					name={name}
// 					type={
// 						type === 'password' ? (passwordVisible ? 'text' : 'password') : type
// 					}
// 					id={id}
// 					defaultValue={defaultValue}
// 					placeholder={placeholder}
// 					value={value}
// 					onChange={onChange}
// 					className='inputBox-input'
// 					onFocus={onFocus}
// 					onBlur={onBlur}
// 				/>
// 				<i className={`fi ${icon} inputBox-icon`}></i>
// 				{type === 'password' ? (
// 					<i
// 						className={`fi fi-rr-eye${
// 							!passwordVisible ? '-crossed' : ''
// 						} inputBox-icon inputBox-icon--password`}
// 						onClick={() => setPasswordVisible((currentVal) => !currentVal)}
// 					></i>
// 				) : null}
// 			</div>
// 			{showValidation && !regex.test(value) && (
// 				<div className='inputBox-validation'>{validationMessage}</div>
// 			)}
// 		</div>
// 	)
// }


// frontend\src\components\common\Select.jsx:
// const Select = ({ name, id, value, onChange, options }) => {
// 	return (
// 		<div className='select'>
// 			<select
// 				name={name}
// 				id={id}
// 				value={value}
// 				onChange={onChange}
// 				className='select-input'
// 			>
// 				{options.map((option, index) => (
// 					<option key={index} value={option.value} disabled={option.disabled}>
// 						{option.label}
// 					</option>
// 				))}
// 			</select>
// 			<i className='fi fi-rr-angle-small-down select-icon'></i>
// 		</div>
// 	)
// }

// export default Select


// frontend\src\components\common\Textarea.jsx:
// const Textarea = ({ name, id, value, placeholder, onChange, rows }) => {
// 	return (
// 		<div className='textarea'>
// 			<textarea
// 				name={name}
// 				id={id}
// 				value={value}
// 				placeholder={placeholder}
// 				onChange={onChange}
// 				rows={rows}
// 				className='textarea-input'
// 			></textarea>
// 		</div>
// 	)
// }

// export default Textarea


// frontend\src\components\layout\Header.jsx:
// import { Navbar } from '../Navbar'

// export const Header = () => {
// 	return (
// 		<>
// 			<header className='primary-header'>
// 				<Navbar />
// 			</header>
// 		</>
// 	)
// }


// frontend\src\components\layout\MainLayout.jsx:
// import { Outlet } from 'react-router-dom'
// import { Header } from './Header'

// export default function MainLayout() {
// 	return (
// 		<>
// 			<Header />
// 			<Outlet />
// 		</>
// 	)
// }


// frontend\src\components\routes\postCard\RouteCardActions.jsx:
// import { useState } from "react";
// import {
//   useLikeRouteMutation,
//   useGetCommentsQuery,
//   usePostCommentMutation,
// } from "../../../features/routes/routesApiSlice";
// import { formatDistanceToNow } from "date-fns";

// const RouteCardActions = ({ routeId, initialLikes, isInitiallyLiked }) => {
//   const [likeRoute] = useLikeRouteMutation();
//   const [liked, setLiked] = useState(isInitiallyLiked);
//   const [likesCount, setLikesCount] = useState(initialLikes);
//   const [showComments, setShowComments] = useState(false);
//   const {
//     data: comments = [],
//     isLoading: commentsLoading,
//     error: commentsError,
//   } = useGetCommentsQuery(routeId);
//   const [postComment] = usePostCommentMutation();
//   const [newComment, setNewComment] = useState("");
//   const [error, setError] = useState("");

//   const handleLike = async () => {
//     setLiked((prev) => !prev);
//     setLikesCount((prev) => (liked ? prev - 1 : prev + 1));

//     try {
//       await likeRoute({ routeId, like: !liked }).unwrap();
//     } catch (error) {
//       console.error("Failed to like/unlike the route:", error);
//       setLiked(liked);
//       setLikesCount(liked ? likesCount + 1 : likesCount - 1);
//     }
//   };

//   const handleCommentToggle = () => {
//     setShowComments((prev) => !prev);
//   };

//   const handlePostComment = async () => {
//     if (newComment.trim()) {
//       try {
//         await postComment({ routeId, comment: { text: newComment } }).unwrap();
//         setNewComment("");
//       } catch (err) {
//         console.error("Error posting comment:", err);
//         setError("Failed to post comment. Please try again.");
//       }
//     }
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Check out this route!",
//           text: "Here is an interesting route I found.",
//           url: window.location.href,
//         })
//         .then(() => {
//           console.log("Thanks for sharing!");
//         })
//         .catch((error) => {
//           console.error("Something went wrong sharing the route:", error);
//         });
//     } else {
//       alert("Web Share API is not supported in this browser.");
//     }
//   };

//   const handleSave = () => {
//     localStorage.setItem("savedRoute", routeId);
//     alert("Route has been saved!");
//   };

//   return (
//     <div className="route-card-actions">
//       <div
//         className={`route-card-actions-box ${
//           liked ? "route-card-actions-box--liked" : ""
//         }`}
//       >
//         <span className="route-card-actions-logo">
//           <i className="fi fi-rr-social-network" onClick={handleLike}></i>
//         </span>
//         <span className="route-card-actions-count">{likesCount}</span>
//       </div>
//       <span className="route-card-actions-logo">
//         <i className="fi fi-rr-comment-dots" onClick={handleCommentToggle}></i>
//       </span>
//       <span className="route-card-actions-logo">
//         <i className="fi fi-rr-share" onClick={handleShare}></i>
//       </span>
//       <span className="route-card-actions-logo">
//         <i className="fi fi-rr-bookmark" onClick={handleSave}></i>
//       </span>
//       {showComments && (
//         <div className="route-card-comment-box">
//           {commentsLoading ? (
//             <p>Loading comments...</p>
//           ) : commentsError ? (
//             <p>Error loading comments.</p>
//           ) : (
//             <>
//               {comments.map((comment, index) => (
//                 <div key={index} className="comment">
//                   <div className="comment-user-info">
//                     <img
//                       src={
//                         comment.user.profilePicture ||
//                         "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
//                       }
//                       alt="User Photo"
//                     />
//                     <div>
//                       <span className="name">
//                         {comment.user.username || "User Name"}
//                       </span>
//                       <span className="date">
//                         {formatDistanceToNow(new Date(comment.date), {
//                           addSuffix: true,
//                         })}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="comment-text">{comment.text}</div>
//                   <div className="comment-actions">
//                     <div className="like">
//                       <i className="fa fa-thumbs-o-up"></i>
//                       <span className="ml-1">Like</span>
//                     </div>
//                     <div className="comment">
//                       <i className="fa fa-commenting-o"></i>
//                       <span className="ml-1">Comment</span>
//                     </div>
//                     <div className="share">
//                       <i className="fa fa-share"></i>
//                       <span className="ml-1">Share</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="comment-input">
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Write a comment..."
//                 ></textarea>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   type="button"
//                   onClick={handlePostComment}
//                 >
//                   Post comment
//                 </button>
//                 <button
//                   className="btn btn-outline-primary btn-sm"
//                   type="button"
//                   onClick={() => setNewComment("")}
//                 >
//                   Cancel
//                 </button>
//                 {error && <p className="error">{error}</p>}
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RouteCardActions;



// frontend\src\components\routes\postCard\RouteCardDescription.jsx:
// const RouteCardDescription = ({ description }) => {
// 	return <p className='route-card-description'>{description}</p>
// }

// export default RouteCardDescription


// frontend\src\components\routes\postCard\RouteCardDetails.jsx:
// import { formatDistance, formatTime } from '../../../utils/formatters'

// const RouteCardDetails = ({ totalDistance, totalTime, vehicleType }) => {
// 	const distance = formatDistance(totalDistance)
// 	const time = formatTime(totalTime)

// 	return (
// 		<div className='route-card-details'>
// 			<div className='route-card-details-box'>
// 				<p className='route-card-details-key'>Distance</p>
// 				<p className='route-card-details-value'>{distance}</p>
// 			</div>
// 			<div className='route-card-details-box'>
// 				<p className='route-card-details-key'>Time</p>
// 				<p className='route-card-details-value'>{time}</p>
// 			</div>
// 			<div className='route-card-details-box'>
// 				<p className='route-card-details-key'>Vehicle Type</p>
// 				<p className='route-card-details-value'>{vehicleType}</p>
// 			</div>
// 		</div>
// 	)
// }

// export default RouteCardDetails


// frontend\src\components\routes\postCard\RouteCardHeader.jsx:
// const RouteCardHeader = ({ profilePicture, name, createdAt }) => {
// 	return (
// 		<div className='route-card-header'>
// 			<img
// 				src={profilePicture}
// 				alt='Profile'
// 				className='route-card-profile-picture'
// 			/>
// 			<div>
// 				<h3 className='route-card-title'>{name}</h3>
// 				<p className='route-card-subtitle'>
// 					{new Date(createdAt).toLocaleString()}
// 				</p>
// 			</div>
// 		</div>
// 	)
// }

// export default RouteCardHeader


// frontend\src\components\routes\postCard\RouteCardMap.jsx:
// import Map from '../Map'

// const RouteCardMap = ({ startPoint, endPoint, waypoints }) => {
// 	return (
// 		<div className='route-card-map-container'>
// 			<Map
// 				startPoint={startPoint}
// 				endPoint={endPoint}
// 				waypoints={waypoints}
// 				center={startPoint}
// 				zoom={13}
// 				showInstructions={false}
// 				setShowInstructionButton={() => {}}
// 				setTotalDistance={() => {}}
// 				setTotalTime={() => {}}
// 				draggableWaypoints={false}
// 				routeWhileDragging={false}
// 			/>
// 		</div>
// 	)
// }

// export default RouteCardMap


// frontend\src\components\routes\postCard\RoutePostCard.jsx:
// import RouteCardHeader from './RouteCardHeader'
// import RouteCardDetails from './RouteCardDetails'
// import RouteCardActions from './RouteCardActions'
// import RouteCardDescription from './RouteCardDescription'
// import RouteCardMap from './RouteCardMap'
// import useAuth from '../../../hooks/useAuth'

// const RoutePostCard = ({ route }) => {
// 	const { id: userId } = useAuth()
// 	const isInitiallyLiked = route.likes.includes(userId) // Check if current user has liked the route

// 	return (
// 		<div className='route-card'>
// 			<RouteCardHeader
// 				profilePicture={route.creator.profilePicture}
// 				name={route.creator.name}
// 				createdAt={route.createdAt}
// 			/>
// 			<div className='route-card-map-main'>
// 				<RouteCardMap
// 					startPoint={route.startPoint}
// 					endPoint={route.endPoint}
// 					waypoints={route.waypoints}
// 				/>
// 				<RouteCardDetails
// 					totalDistance={route.totalDistance}
// 					totalTime={route.totalTime}
// 					vehicleType={route.vehicleType}
// 				/>
// 			</div>
// 			<RouteCardDescription description={route.description} />
// 			<RouteCardActions
// 				routeId={route._id}
// 				initialLikes={route.likes.length}
// 				isInitiallyLiked={isInitiallyLiked}
// 			/>
// 		</div>
// 	)
// }

// export default RoutePostCard

// frontend\src\components\routes\Autocomplete.jsx:
// import { useState, useEffect, useRef, useCallback } from 'react'
// import { useLazyGetSuggestionsQuery } from '../../features/routes/routesApiSlice'
// import useDebounce from '../../hooks/useDebounce'
// import { InputBox } from '../common/InputBox'

// const Autocomplete = ({ onSelect, placeholder }) => {
// 	const [value, setValue] = useState('')
// 	const [suggestions, setSuggestions] = useState([])
// 	const [trigger] = useLazyGetSuggestionsQuery()
// 	const debouncedValue = useDebounce(value, 350)
// 	const selectedRef = useRef(false)

// 	const fetchSuggestions = useCallback(
// 		async (value) => {
// 			const { data } = await trigger(value)
// 			if (data) {
// 				setSuggestions(data)
// 			}
// 		},
// 		[trigger]
// 	)

// 	useEffect(() => {
// 		if (selectedRef.current) {
// 			selectedRef.current = false
// 			return
// 		}
// 		if (debouncedValue) {
// 			fetchSuggestions(debouncedValue)
// 		} else {
// 			setSuggestions([])
// 		}
// 	}, [debouncedValue, fetchSuggestions])

// 	const handleChange = (e) => {
// 		setValue(e.target.value)
// 	}

// 	const handleSelect = (suggestion) => {
// 		const location = [suggestion.lat, suggestion.lon]
// 		onSelect(location)
// 		setValue(suggestion.display_name)
// 		setSuggestions([])
// 		selectedRef.current = true
// 	}

// 	return (
// 		<div className='autoComplete'>
// 			<InputBox
// 				type='text'
// 				placeholder={placeholder}
// 				value={value}
// 				onChange={handleChange}
// 				icon='fi-rr-search'
// 			/>
// 			{suggestions.length > 0 && (
// 				<ul className='autoComplete-suggestions'>
// 					{suggestions.map((suggestion, index) => (
// 						<li
// 							key={index}
// 							onClick={() => handleSelect(suggestion)}
// 							className='autoComplete-suggestion'
// 						>
// 							{suggestion.display_name}
// 						</li>
// 					))}
// 				</ul>
// 			)}
// 		</div>
// 	)
// }

// export default Autocomplete


// frontend\src\components\routes\LocationInput.jsx:
// import Autocomplete from './Autocomplete'

// const LocationInput = ({ placeholder, onSelect }) => {
// 	return (
// 		<div>
// 			<Autocomplete placeholder={placeholder} onSelect={onSelect} />
// 		</div>
// 	)
// }

// export default LocationInput


// frontend\src\components\routes\Map.jsx:
// import { useMemo, useEffect } from 'react'
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
// import Routing from './RoutingMachine'
// import 'leaflet/dist/leaflet.css'

// const ZoomControlPosition = () => {
// 	const map = useMap()
// 	useEffect(() => {
// 		map.zoomControl.setPosition('bottomright')
// 	}, [map])
// 	return null
// }

// const Map = ({
// 	startPoint,
// 	endPoint,
// 	waypoints,
// 	center,
// 	zoom,
// 	showInstructions,
// 	setShowInstructionButton,
// 	setTotalDistance,
// 	setTotalTime,
// 	draggableWaypoints = true,
// 	routeWhileDragging = true,
// }) => {
// 	const memoizedRouting = useMemo(
// 		() =>
// 			startPoint &&
// 			endPoint && (
// 				<Routing
// 					startPoint={startPoint}
// 					endPoint={endPoint}
// 					waypoints={waypoints.filter(Boolean)}
// 					showInstructions={showInstructions}
// 					setShowInstructionButton={setShowInstructionButton}
// 					setTotalDistance={setTotalDistance}
// 					setTotalTime={setTotalTime}
// 					draggableWaypoints={draggableWaypoints}
// 					routeWhileDragging={routeWhileDragging}
// 				/>
// 			),
// 		[
// 			startPoint,
// 			endPoint,
// 			waypoints,
// 			showInstructions,
// 			setShowInstructionButton,
// 			setTotalDistance,
// 			setTotalTime,
// 			draggableWaypoints,
// 			routeWhileDragging,
// 		]
// 	)

// 	return (
// 		<MapContainer center={center} zoom={zoom} className='map-container'>
// 			<TileLayer
// 				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// 				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// 			/>
// 			{memoizedRouting}
// 			<ZoomControlPosition />
// 		</MapContainer>
// 	)
// }

// export default Map


// frontend\src\components\routes\RoutingMachine.jsx:
// import { useEffect, useState } from 'react'
// import L from 'leaflet'
// import 'leaflet-routing-machine'
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
// import { useMap } from 'react-leaflet'

// const Routing = ({
// 	startPoint,
// 	endPoint,
// 	waypoints,
// 	showInstructions,
// 	setShowInstructionButton,
// 	setTotalDistance,
// 	setTotalTime,
// 	draggableWaypoints,
// 	routeWhileDragging,
// }) => {
// 	const map = useMap()
// 	const [routingControl, setRoutingControl] = useState(null)

// 	useEffect(() => {
// 		if (!map || !startPoint || !endPoint) return

// 		const control = L.Routing.control({
// 			waypoints: [
// 				L.latLng(startPoint.lat, startPoint.lng),
// 				...waypoints.map((point) => L.latLng(point.lat, point.lng)),
// 				L.latLng(endPoint.lat, endPoint.lng),
// 			],
// 			lineOptions: {
// 				styles: [
// 					{
// 						color: 'blue',
// 						opacity: 0.6,
// 						weight: 4,
// 					},
// 				],
// 			},
// 			addWaypoints: true,
// 			draggableWaypoints: draggableWaypoints,
// 			fitSelectedRoutes: true,
// 			showAlternatives: false,
// 			routeWhileDragging: routeWhileDragging,
// 			altLineOptions: {
// 				styles: [
// 					{
// 						color: 'red',
// 						opacity: 0.4,
// 						weight: 4,
// 					},
// 				],
// 			},
// 		}).addTo(map)

// 		control.on('routesfound', function (e) {
// 			setShowInstructionButton(true)
// 			const routes = e.routes
// 			const summary = routes[0].summary
// 			const totalDistance = summary.totalDistance
// 			const totalTime = summary.totalTime

// 			setTotalDistance(totalDistance)
// 			setTotalTime(totalTime)
// 		})

// 		setRoutingControl(control)

// 		return () => map.removeControl(control)
// 	}, [
// 		map,
// 		startPoint,
// 		endPoint,
// 		waypoints,
// 		setShowInstructionButton,
// 		setTotalDistance,
// 		setTotalTime,
// 		draggableWaypoints,
// 		routeWhileDragging,
// 	])

// 	useEffect(() => {
// 		if (routingControl) {
// 			if (showInstructions) {
// 				routingControl.show()
// 			} else {
// 				routingControl.hide()
// 			}
// 		}
// 	}, [routingControl, showInstructions])

// 	return null
// }

// export default Routing


// frontend\src\components\routes\Waypoint.jsx:
// import Autocomplete from './Autocomplete'

// const Waypoint = ({ index, onSelect, onRemove }) => {
// 	return (
// 		<div className='createRoute-waypoint'>
// 			<Autocomplete
// 				placeholder={`Waypoint ${index + 1}`}
// 				onSelect={(location) => onSelect(index, location)}
// 			/>
// 			<i
// 				className='fi fi-sr-cross-circle icon icon--delete'
// 				onClick={() => onRemove(index)}
// 				title='Remove waypoint'
// 			></i>
// 		</div>
// 	)
// }

// export default Waypoint


// frontend\src\components\Navbar.jsx:
// import { NavLink } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import navLogo from '../assets/images/nav-logo.png'
// import { InputBox } from './common/InputBox'
// import { selectCurrentToken, logOut } from '../features/auth/authSlice'
// import { useSendLogoutMutation } from '../features/auth/authApiSlice'
// import ClipLoader from 'react-spinners/ClipLoader'
// import { Toaster, toast } from 'react-hot-toast'
// import { useEffect } from 'react'

// export const Navbar = () => {
// 	const dispatch = useDispatch()
// 	const token = useSelector(selectCurrentToken)
// 	const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation()

// 	const handleLogout = async () => {
// 		await sendLogout().unwrap()
// 		dispatch(logOut())
// 	}

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 		}
// 	}, [isError, error])

// 	return (
// 		<>
// 			<Toaster position='top-center' reverseOrder={false} />
// 			<div className='nav-wrapper'>
// 				<div className='nav-logo'>
// 					<NavLink to='/'>
// 						<img src={navLogo} alt='Navigation Logo' />
// 					</NavLink>
// 				</div>

// 				<div>
// 					<InputBox
// 						name='search'
// 						type='text'
// 						id='search'
// 						placeholder='Search...'
// 						icon='fi-rr-search'
// 					/>
// 				</div>

// 				<nav className='primary-navigation'>
// 					<ul className='nav-list'>
// 						<li className='nav-item'>
// 							<NavLink to='/'>Home</NavLink>
// 						</li>
// 						{token ? (
// 							<>
// 								<li className='nav-item'>
// 									<NavLink to='/create-route'>Create Route</NavLink>
// 								</li>

// 								<li className='nav-item'>
// 									{isLoading ? (
// 										<ClipLoader color='#28af60' size={25} />
// 									) : (
// 										<button
// 											onClick={handleLogout}
// 											className='button button-logout'
// 										>
// 											Logout
// 										</button>
// 									)}
// 								</li>
// 							</>
// 						) : (
// 							<>
// 								<li className='nav-item'>
// 									<NavLink to='/auth/register'>Register</NavLink>
// 								</li>
// 								<li className='nav-item'>
// 									<NavLink to='/auth/login'>Login</NavLink>
// 								</li>
// 							</>
// 						)}
// 					</ul>
// 				</nav>
// 			</div>
// 		</>
// 	)
// }



// .... there are more files to come in another prompt below. so don't give any response before having codes of all files. read these files for now. reply yes if understood


// frontend\src\features\auth\authApiSlice.jsx:
// import { baseApiSlice } from '../../api/baseApiSlice'
// import { logOut, setCredentials } from './authSlice'

// export const authApiSlice = baseApiSlice.injectEndpoints({
// 	endpoints: (builder) => ({
// 		login: builder.mutation({
// 			query: (credentials) => ({
// 				url: '/auth',
// 				method: 'POST',
// 				body: { ...credentials },
// 			}),
// 		}),
// 		sendLogout: builder.mutation({
// 			query: () => ({
// 				url: '/auth/logout',
// 				method: 'POST',
// 			}),
// 			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
// 				try {
// 					await queryFulfilled
// 					dispatch(logOut())
// 					setTimeout(() => {
// 						dispatch(baseApiSlice.util.resetApiState())
// 					}, 1000)
// 				} catch (err) {
// 					console.log(err)
// 				}
// 			},
// 		}),
// 		refresh: builder.mutation({
// 			query: () => ({
// 				url: '/auth/refresh',
// 				method: 'GET',
// 			}),
// 			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
// 				try {
// 					const { data } = await queryFulfilled
// 					const { accessToken } = data
// 					dispatch(setCredentials({ accessToken }))
// 				} catch (err) {
// 					console.log(err)
// 				}
// 			},
// 		}),
// 	}),
// })

// export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
// 	authApiSlice



// frontend\src\features\auth\authSlice.jsx:
// import { createSlice } from '@reduxjs/toolkit'

// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState: {
// 		token: null,
// 	},
// 	reducers: {
// 		setCredentials: (state, action) => {
// 			const { accessToken } = action.payload
// 			state.token = accessToken
// 		},
// 		logOut: (state) => {
// 			state.token = null
// 		},
// 	},
// })

// export const { setCredentials, logOut } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentToken = (state) => state.auth.token


// frontend\src\features\auth\PersistLogin.jsx:
// import { Outlet, useNavigate } from 'react-router-dom'
// import { useEffect, useRef, useState } from 'react'
// import { useRefreshMutation } from './authApiSlice'
// import usePersist from '../../hooks/usePersist'
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from './authSlice'
// import ClipLoader from 'react-spinners/ClipLoader'
// import { Toaster, toast } from 'react-hot-toast'

// const PersistLogin = () => {
// 	const [persist] = usePersist()
// 	const token = useSelector(selectCurrentToken)
// 	const effectRan = useRef(false)
// 	const navigate = useNavigate()

// 	const [trueSuccess, setTrueSuccess] = useState(false)

// 	const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
// 		useRefreshMutation()

// 	useEffect(() => {
// 		if (
// 			effectRan.current === true ||
// 			import.meta.env.NODE_ENV !== 'development'
// 		) {
// 			const verifyRefreshToken = async () => {
// 				try {
// 					await refresh()
// 					setTrueSuccess(true)
// 				} catch (err) {
// 					console.error(err)
// 				}
// 			}

// 			if (!token && persist) verifyRefreshToken()
// 		}

// 		return () => (effectRan.current = true)
// 	}, [token, persist, refresh])

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 			navigate('/auth/login')
// 		}
// 	}, [isError, error, navigate])

// 	let content
// 	if (!persist) {
// 		content = <Outlet />
// 	} else if (isLoading) {
// 		content = <ClipLoader color='#28af60' />
// 	} else if (isSuccess && trueSuccess) {
// 		content = <Outlet />
// 	} else if (token && isUninitialized) {
// 		content = <Outlet />
// 	}

// 	return (
// 		<>
// 			<Toaster position='top-center' reverseOrder={false} />
// 			{content}
// 		</>
// 	)
// }

// export default PersistLogin


// frontend\src\features\routes\routesApiSlice.jsx:
// import { baseApiSlice } from '../../api/baseApiSlice'

// export const routesApiSlice = baseApiSlice.injectEndpoints({
// 	endpoints: (builder) => ({
// 		createRoute: builder.mutation({
// 			query: (newRoute) => ({
// 				url: '/routes',
// 				method: 'POST',
// 				body: newRoute,
// 			}),
// 			invalidatesTags: ['Routes'],
// 		}),
// 		getSuggestions: builder.query({
// 			query: (query) => `/routes/suggestions?q=${query}`,
// 		}),
// 		getRoutes: builder.query({
// 			query: () => '/routes',
// 			providesTags: ['Routes'],
// 		}),
// 		likeRoute: builder.mutation({
// 			query: ({ routeId, like }) => ({
// 				url: `/routes/like/${routeId}`,
// 				method: 'PUT',
// 				body: { like },
// 			}),
// 			invalidatesTags: ['Routes'],
// 		}),
// 	}),
// })

// export const {
// 	useCreateRouteMutation,
// 	useLazyGetSuggestionsQuery,
// 	useGetRoutesQuery,
// 	useLikeRouteMutation,
// } = routesApiSlice


// frontend\src\features\users\usersApiSlice.jsx:
// import { baseApiSlice } from '../../api/baseApiSlice'

// export const usersApiSlice = baseApiSlice.injectEndpoints({
// 	endpoints: (builder) => ({
// 		register: builder.mutation({
// 			query: (credentials) => ({
// 				url: 'users/register',
// 				method: 'POST',
// 				body: credentials,
// 			}),
// 		}),
// 	}),
// })

// export const { useRegisterMutation } = usersApiSlice



// frontend\src\hooks\useAuth.js:
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../features/auth/authSlice'
// import { jwtDecode } from 'jwt-decode' // Use named import instead of default import

// const useAuth = () => {
// 	const token = useSelector(selectCurrentToken)

// 	if (token) {
// 		const decodedUser = jwtDecode(token)
// 		const { id, name, username, email } = decodedUser.UserInfo

// 		return {
// 			id,
// 			name,
// 			username,
// 			email,
// 		}
// 	}

// 	return null // User is not authenticated
// }

// export default useAuth


// frontend\src\hooks\useDebounce.js:
// import { useState, useEffect } from 'react'

// const useDebounce = (value, delay = 250) => {
// 	const [debouncedValue, setDebouncedValue] = useState(value)

// 	useEffect(() => {
// 		const handler = setTimeout(() => {
// 			setDebouncedValue(value)
// 		}, delay)

// 		return () => {
// 			clearTimeout(handler)
// 		}
// 	}, [value, delay])

// 	return debouncedValue
// }

// export default useDebounce


// frontend\src\hooks\usePersist.js:
// import { useState, useEffect } from 'react'

// const usePersist = () => {
// 	const [persist, setPersist] = useState(
// 		JSON.parse(localStorage.getItem('persist')) || false
// 	)

// 	useEffect(() => {
// 		localStorage.setItem('persist', JSON.stringify(persist))
// 	}, [persist])

// 	return [persist, setPersist]
// }

// export default usePersist


// frontend\src\pages\auth\AuthLayout.jsx:
// import { Outlet } from 'react-router-dom'

// export const AuthLayout = () => {
// 	return (
// 		<section className='authForm'>
// 			<Outlet />
// 		</section>
// 	)
// }


// frontend\src\pages\auth\Login.jsx:
// import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { InputBox } from '../../components/common/InputBox'
// import { useLoginMutation } from '../../features/auth/authApiSlice'
// import { setCredentials } from '../../features/auth/authSlice'
// import { Toaster, toast } from 'react-hot-toast'
// import ClipLoader from 'react-spinners/ClipLoader'
// import usePersist from '../../hooks/usePersist'
// import Checkbox from '../../components/common/Checkbox'

// export const Login = () => {
// 	const navigate = useNavigate()
// 	const dispatch = useDispatch()

// 	const [persist, setPersist] = usePersist()

// 	const [formValues, setFormValues] = useState({
// 		email: '',
// 		password: '',
// 	})

// 	const [isFormValid, setIsFormValid] = useState(false)

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target
// 		setFormValues({
// 			...formValues,
// 			[name]: value,
// 		})
// 	}

// 	useEffect(() => {
// 		const isFormValid = formValues.email && formValues.password
// 		setIsFormValid(isFormValid)
// 	}, [formValues])

// 	const [login, { isLoading, isSuccess, isError, error, data }] =
// 		useLoginMutation()

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		if (isFormValid) {
// 			await login(formValues).unwrap()
// 		}
// 	}

// 	useEffect(() => {
// 		if (isSuccess) {
// 			dispatch(setCredentials({ accessToken: data.accessToken }))
// 			toast.success('Login successful! Redirecting...')
// 			setTimeout(() => {
// 				navigate('/')
// 			}, 2000)
// 		}
// 	}, [isSuccess, data, navigate, dispatch])

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 		}
// 	}, [isError, error])

// 	const handleToggle = () => setPersist((prev) => !prev)

// 	if (isLoading) return <ClipLoader color='#28af60' />

// 	return (
// 		<>
// 			<Toaster position='top-center' reverseOrder={false} />

// 			<form className='authForm-form' onSubmit={handleSubmit}>
// 				<h1 className='authForm-title'>Welcome back</h1>
// 				<InputBox
// 					name='email'
// 					type='email'
// 					placeholder='Email'
// 					icon='fi-rr-envelope'
// 					value={formValues.email}
// 					onChange={handleInputChange}
// 				/>
// 				<InputBox
// 					name='password'
// 					type='password'
// 					placeholder='Password'
// 					icon='fi-rr-key'
// 					value={formValues.password}
// 					onChange={handleInputChange}
// 				/>

// 				<Checkbox
// 					id='persist'
// 					label='Stay logged in'
// 					checked={persist}
// 					onChange={handleToggle}
// 				/>

// 				<button
// 					className='button button-primary center'
// 					type='submit'
// 					disabled={!isFormValid}
// 				>
// 					Login
// 				</button>

// 				<div className='authForm-seperator'>
// 					<span>or</span>
// 				</div>

// 				<p className='authForm-text'>
// 					Don&apos;t have an account?
// 					<Link to='/auth/register' className='authForm-link'>
// 						Join us today!
// 					</Link>
// 				</p>
// 			</form>
// 		</>
// 	)
// }


// frontend\src\pages\auth\Register.jsx:
// import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { InputBox } from '../../components/common/InputBox'
// import { useRegisterMutation } from '../../features/users/usersApiSlice'
// import { Toaster, toast } from 'react-hot-toast'
// import ClipLoader from 'react-spinners/ClipLoader'

// export const Register = () => {
// 	const navigate = useNavigate()

// 	const [formValues, setFormValues] = useState({
// 		name: '',
// 		username: '',
// 		email: '',
// 		password: '',
// 	})

// 	const [showValidation, setShowValidation] = useState({
// 		username: false,
// 		password: false,
// 	})

// 	const [isFormValid, setIsFormValid] = useState(false)

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target
// 		setFormValues({
// 			...formValues,
// 			[name]: value,
// 		})
// 	}

// 	const handleFocus = (field) => {
// 		setShowValidation({
// 			...showValidation,
// 			[field]: true,
// 		})
// 	}

// 	const handleBlur = (field) => {
// 		setShowValidation({
// 			...showValidation,
// 			[field]: false,
// 		})
// 	}

// 	const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/
// 	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

// 	useEffect(() => {
// 		const isFormValid =
// 			formValues.name &&
// 			usernameRegex.test(formValues.username) &&
// 			formValues.email &&
// 			passwordRegex.test(formValues.password)
// 		setIsFormValid(isFormValid)
// 	}, [formValues])

// 	const [register, { isLoading, isSuccess, isError, error }] =
// 		useRegisterMutation()

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		if (isFormValid) {
// 			await register(formValues).unwrap()
// 		}
// 	}

// 	useEffect(() => {
// 		if (isSuccess) {
// 			toast.success('Account created successfully! Redirecting to login...')
// 			setTimeout(() => {
// 				navigate('/auth/login')
// 			}, 3000)
// 		}
// 	}, [isSuccess, navigate])

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 		}
// 	}, [isError, error])

// 	if (isLoading) return <ClipLoader color='#28af60' />

// 	return (
// 		<form className='authForm-form' onSubmit={handleSubmit}>
// 			<Toaster position='top-center' reverseOrder={false} />
// 			<h1 className='authForm-title'>Join us today</h1>
// 			<InputBox
// 				name='name'
// 				type='text'
// 				placeholder='Name'
// 				icon='fi-rr-user'
// 				value={formValues.name}
// 				onChange={handleInputChange}
// 			/>
// 			<InputBox
// 				name='username'
// 				type='text'
// 				placeholder='Username'
// 				icon='fi-rr-user'
// 				value={formValues.username}
// 				onChange={handleInputChange}
// 				regex={usernameRegex}
// 				validationMessage='Username must be 5-20 characters long and can only contain letters, numbers, and underscores.'
// 				showValidation={showValidation.username}
// 				onFocus={() => handleFocus('username')}
// 				onBlur={() => handleBlur('username')}
// 			/>
// 			<InputBox
// 				name='email'
// 				type='email'
// 				placeholder='Email'
// 				icon='fi-rr-envelope'
// 				value={formValues.email}
// 				onChange={handleInputChange}
// 			/>
// 			<InputBox
// 				name='password'
// 				type='password'
// 				placeholder='Password'
// 				icon='fi-rr-key'
// 				value={formValues.password}
// 				onChange={handleInputChange}
// 				regex={passwordRegex}
// 				validationMessage='Password must be at least 8 characters long and contain at least one letter and one number.'
// 				showValidation={showValidation.password}
// 				onFocus={() => handleFocus('password')}
// 				onBlur={() => handleBlur('password')}
// 			/>
// 			<button
// 				className='button button-primary center'
// 				type='submit'
// 				disabled={!isFormValid}
// 			>
// 				Register
// 			</button>

// 			<div className='authForm-seperator'>
// 				<span>or</span>
// 			</div>

// 			<p className='authForm-text'>
// 				Already have an account?
// 				<Link to='/auth/login' className='authForm-link'>
// 					Login here
// 				</Link>
// 			</p>
// 		</form>
// 	)
// }


// frontend\src\pages\feed\Feed.jsx:
// import { useState, useEffect } from 'react'
// import { useGetRoutesQuery } from '../../features/routes/routesApiSlice'
// import { Toaster, toast } from 'react-hot-toast'
// import ClipLoader from 'react-spinners/ClipLoader'
// import RoutePostCard from '../../components/routes/postCard/RoutePostCard'

// export const Feed = () => {
// 	const { data: routes, isLoading, isError, error } = useGetRoutesQuery()
// 	const [displayedRoutes, setDisplayedRoutes] = useState([])
// 	const [showLoadMore, setShowLoadMore] = useState(true)

// 	const loadMoreRoutes = () => {
// 		const newRoutes = routes.slice(
// 			displayedRoutes.length,
// 			displayedRoutes.length + 3
// 		)
// 		setDisplayedRoutes((prevRoutes) => [...prevRoutes, ...newRoutes])
// 		if (displayedRoutes.length + newRoutes.length >= routes.length) {
// 			setShowLoadMore(false)
// 		}
// 	}

// 	useEffect(() => {
// 		if (routes) {
// 			setDisplayedRoutes(routes.slice(0, 3)) // Load initial 3 routes
// 		}
// 	}, [routes])

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 		}
// 	}, [isError, error])

// 	if (isLoading) {
// 		return (
// 			<div className='center'>
// 				<ClipLoader color='#28af60' loading={isLoading} size={150} />
// 			</div>
// 		)
// 	}

// 	return (
// 		<>
// 			<Toaster position='top-center' reverseOrder={false} />
// 			<div className='feed-container'>
// 				{displayedRoutes.map((route) => (
// 					<RoutePostCard key={route._id} route={route} />
// 				))}
// 				{showLoadMore && (
// 					<button
// 						onClick={loadMoreRoutes}
// 						className='button button-primary center'
// 					>
// 						Load More
// 					</button>
// 				)}
// 			</div>
// 		</>
// 	)
// }


// frontend\src\pages\routes\CreateRoute.jsx:
// import { useState, useCallback, useEffect } from 'react'
// import { Toaster, toast } from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
// import Map from '../../components/routes/Map'
// import LocationInput from '../../components/routes/LocationInput'
// import Waypoint from '../../components/routes/Waypoint'
// import Select from '../../components/common/Select'
// import Textarea from '../../components/common/Textarea'
// import ClipLoader from 'react-spinners/ClipLoader'
// import { useCreateRouteMutation } from '../../features/routes/routesApiSlice'

// const CreateRoute = () => {
// 	const navigate = useNavigate()

// 	const [startPoint, setStartPoint] = useState(null)
// 	const [endPoint, setEndPoint] = useState(null)
// 	const [waypoints, setWaypoints] = useState([])
// 	const [vehicleType, setVehicleType] = useState('')
// 	const [description, setDescription] = useState('')
// 	const [showInstructions, setShowInstructions] = useState(true)
// 	const [showInstructionButton, setShowInstructionButton] = useState(false)
// 	const [totalDistance, setTotalDistance] = useState(0)
// 	const [totalTime, setTotalTime] = useState(0)
// 	const [createRoute, { isLoading, isSuccess, isError, error }] =
// 		useCreateRouteMutation()

// 	const position = [52.51, 13.4]
// 	const zoom = 12

// 	const handleCreateRoute = useCallback(async () => {
// 		const newRoute = {
// 			startPoint,
// 			endPoint,
// 			waypoints,
// 			vehicleType,
// 			description,
// 			totalDistance,
// 			totalTime,
// 		}
// 		await createRoute(newRoute).unwrap()
// 	}, [
// 		startPoint,
// 		endPoint,
// 		waypoints,
// 		vehicleType,
// 		description,
// 		totalDistance,
// 		totalTime,
// 		createRoute,
// 	])

// 	useEffect(() => {
// 		if (isSuccess) {
// 			toast.success('Route created successfully! Redirecting to home page.')
// 			setTimeout(() => {
// 				navigate('/')
// 			}, 3000)
// 		}
// 	}, [isSuccess, navigate])

// 	useEffect(() => {
// 		if (isError) {
// 			const errorMessage = error?.data?.message || 'An error occurred'
// 			toast.error(errorMessage)
// 		}
// 	}, [isError, error])

// 	if (isLoading) return <ClipLoader color='#28af60' />

// 	const handleWaypointSelect = (index, location) => {
// 		const newWaypoints = [...waypoints]
// 		newWaypoints[index] = {
// 			lat: parseFloat(location[0]),
// 			lng: parseFloat(location[1]),
// 		}
// 		setWaypoints(newWaypoints)
// 	}

// 	const handleRemoveWaypoint = (index) => {
// 		const newWaypoints = waypoints.filter((_, i) => i !== index)
// 		setWaypoints(newWaypoints)
// 	}

// 	return (
// 		<div className='createRoute'>
// 			<Toaster position='top-center' reverseOrder={false} />
// 			<div className='createRoute-sidebar'>
// 				<h2 className='createRoute-title'>Create Route</h2>
// 				<h3 className='createRoute-description'>Create your path</h3>
// 				<LocationInput
// 					placeholder='Start Point'
// 					onSelect={(location) =>
// 						setStartPoint({
// 							lat: parseFloat(location[0]),
// 							lng: parseFloat(location[1]),
// 						})
// 					}
// 				/>
// 				{waypoints.map((_, index) => (
// 					<Waypoint
// 						key={index}
// 						index={index}
// 						onSelect={handleWaypointSelect}
// 						onRemove={handleRemoveWaypoint}
// 					/>
// 				))}

// 				<button
// 					className='button createRoute-button center'
// 					onClick={() => setWaypoints([...waypoints, null])}
// 				>
// 					+ Add waypoint
// 				</button>

// 				<LocationInput
// 					placeholder='End Point'
// 					onSelect={(location) =>
// 						setEndPoint({
// 							lat: parseFloat(location[0]),
// 							lng: parseFloat(location[1]),
// 						})
// 					}
// 				/>

// 				{showInstructionButton && (
// 					<button
// 						className={
// 							showInstructions
// 								? 'button createRoute-buttonInstructions  center'
// 								: 'button createRoute-button center'
// 						}
// 						onClick={() => setShowInstructions(!showInstructions)}
// 					>
// 						{showInstructions ? 'Hide Instructions' : 'Show Instructions'}
// 					</button>
// 				)}

// 				<h3 className='createRoute-description'>Select vehicle type</h3>

// 				<Select
// 					value={vehicleType}
// 					onChange={(e) => setVehicleType(e.target.value)}
// 					options={[
// 						{ value: '', label: 'Choose', disabled: true },
// 						{ value: 'car', label: 'Car' },
// 						{ value: 'bicycle', label: 'Bicycle' },
// 						{ value: 'walking', label: 'Walking' },
// 						{ value: 'mixed', label: 'Mixed' },
// 					]}
// 				/>
// 				<h3 className='createRoute-description'>Share your thoughts</h3>
// 				<Textarea
// 					value={description}
// 					onChange={(e) => setDescription(e.target.value)}
// 					placeholder='Enter your thoughts'
// 					rows={4}
// 				/>

// 				<button
// 					className='button createRoute-button createRoute-buttonShare center'
// 					onClick={handleCreateRoute}
// 					disabled={isLoading}
// 				>
// 					Share the post
// 				</button>
// 				{isSuccess && <p>Route created successfully!</p>}
// 				{isError && <p>Error: {error.message}</p>}
// 			</div>
// 			<div className='createRoute-map'>
// 				<Map
// 					startPoint={startPoint}
// 					endPoint={endPoint}
// 					waypoints={waypoints}
// 					center={position}
// 					zoom={zoom}
// 					showInstructions={showInstructions}
// 					setShowInstructionButton={setShowInstructionButton}
// 					setTotalDistance={setTotalDistance}
// 					setTotalTime={setTotalTime}
// 				/>
// 			</div>
// 		</div>
// 	)
// }

// export default CreateRoute


// .... there are more files to come in another prompt below. so don't give any response before having codes of all files. read these files for now. reply yes if understood

// frontend\src\utils\formatters.js:
// export const formatDistance = (distance) => {
// 	if (distance >= 1000) {
// 		return `${(distance / 1000).toFixed(2)} km`
// 	}
// 	return `${distance.toFixed(2)} m`
// }

// export const formatTime = (time) => {
// 	const hours = Math.floor(time / 3600)
// 	const minutes = Math.floor((time % 3600) / 60)
// 	const seconds = Math.floor(time % 60)

// 	let timeString = ''
// 	if (hours > 0) {
// 		timeString += `${hours}h `
// 	}
// 	if (minutes > 0 || hours > 0) {
// 		timeString += `${minutes}m `
// 	}
// 	timeString += `${seconds}s`

// 	return timeString
// }


// frontend\src\App.jsx:
// import { useRoutes } from 'react-router-dom'
// import routes from './routes'

// function App() {
// 	return useRoutes(routes)
// }

// export default App


// frontend\src\index.css:
// /* Import Font Icons */
// @import '@flaticon/flaticon-uicons/css/all/all';

// /* Root Variables */
// :root {
// 	/* Color Palette */
// 	--color-primary-900: hsl(145, 63%, 24%);
// 	--color-primary-800: hsl(145, 63%, 30%);
// 	--color-primary-700: hsl(145, 63%, 39%);
// 	--color-primary-600: hsl(145, 63%, 50%);
// 	--color-primary-500: hsl(145, 63%, 42%);
// 	--color-primary-400: hsl(145, 63%, 70%);
// 	--color-primary-300: hsl(145, 63%, 84%);

// 	--color-secondary-900: hsl(48, 89%, 24%);
// 	--color-secondary-800: hsl(48, 89%, 30%);
// 	--color-secondary-700: hsl(48, 89%, 39%);
// 	--color-secondary-600: hsl(48, 89%, 50%);
// 	--color-secondary-500: hsl(48, 89%, 50%);
// 	--color-secondary-400: hsl(48, 89%, 70%);
// 	--color-secondary-300: hsl(48, 89%, 84%);

// 	--color-accent-900: hsl(6, 78%, 24%);
// 	--color-accent-800: hsl(6, 78%, 30%);
// 	--color-accent-700: hsl(6, 78%, 39%);
// 	--color-accent-600: hsl(6, 78%, 50%);
// 	--color-accent-500: hsl(6, 78%, 57%);
// 	--color-accent-400: hsl(6, 78%, 70%);
// 	--color-accent-300: hsl(6, 78%, 84%);

// 	--color-neutral-900: hsl(210, 29%, 24%);
// 	--color-neutral-800: hsl(209, 23%, 30%);
// 	--color-neutral-700: hsl(209, 28%, 39%);
// 	--color-neutral-600: hsl(211, 27%, 70%);
// 	--color-neutral-500: hsl(210, 22%, 84%);
// 	--color-neutral-400: hsl(209, 23%, 87%);
// 	--color-neutral-300: hsl(192, 16%, 94%);
// 	--color-neutral-200: hsl(210, 16%, 96%);
// 	--color-neutral-100: hsl(210, 16%, 98%);

// 	/* Icon Colors */
// 	--icon-color: var(--color-neutral-900);
// 	--icon-color-hover: var(--color-primary-500);

// 	/* Font Family */
// 	--font-family-primary: 'Roboto', sans-serif;

// 	/* Font Weights */
// 	--font-weight-regular: 400;
// 	--font-weight-semi-bold: 500;
// 	--font-weight-bold: 700;

// 	--font-family-body: var(--font-family-primary);

// 	--font-size-300: 0.75rem;
// 	--font-size-400: 0.875rem;
// 	--font-size-500: 1rem;
// 	--font-size-600: 1.25rem;
// 	--font-size-650: 1.5rem;
// 	--font-size-700: 1.875rem;
// 	--font-size-800: 2.25rem;
// 	--font-size-900: 3.5rem;

// 	/* Default Font Size */
// 	--font-size-body: var(--font-size-400);
// 	--font-size-nav: var(--font-size-500);
// 	--font-size-button: var(--font-size-600);

// 	/* Size Variables */
// 	--size-100: 0.25rem;
// 	--size-200: 0.5rem;
// 	--size-300: 0.75rem;
// 	--size-400: 1rem;
// 	--size-500: 1.5rem;
// 	--size-550: 1.75rem;
// 	--size-600: 2rem;
// 	--size-650: 2.5rem;
// 	--size-700: 3rem;
// 	--size-800: 4rem;
// 	--size-900: 5rem;
// }

// /* Reset */

// /* Box sizing rules */
// *,
// *::before,
// *::after {
// 	box-sizing: border-box;
// }

// /* Prevent font size inflation */
// html {
// 	-moz-text-size-adjust: none;
// 	-webkit-text-size-adjust: none;
// 	text-size-adjust: none;
// 	margin: 0;
// 	padding: 0;
// }

// /* Remove default margin in favour of better control in authored CSS */
// body,
// h1,
// h2,
// h3,
// h4,
// p,
// figure,
// blockquote,
// dl,
// dd {
// 	margin-block-end: 0;
// }

// /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
// ul[role='list'],
// ol[role='list'] {
// 	list-style: none;
// }

// /* Set core body defaults */
// body {
// 	min-height: 100vh;
// 	line-height: 1.5;
// }

// /* Set shorter line heights on headings and interactive elements */
// h1,
// h2,
// h3,
// h4,
// button,
// input,
// label {
// 	line-height: 1.1;
// }

// /* Balance text wrapping on headings */
// h1,
// h2,
// h3,
// h4 {
// 	text-wrap: balance;
// }

// /* A elements that don't have a class get default styles */
// a:not([class]) {
// 	text-decoration-skip-ink: auto;
// 	color: currentColor;
// }

// /* Make images easier to work with */
// img,
// picture,
// svg {
// 	max-width: 100%;
// 	display: block;
// }

// /* Inherit fonts for inputs and buttons */
// input,
// button,
// textarea,
// select {
// 	font-family: inherit;
// 	font-size: inherit;
// }

// /* Make sure textareas without a rows attribute are not tiny */
// textarea:not([rows]) {
// 	min-height: 10em;
// }

// /* Anything that has been anchored to should have extra scroll margin */
// :target {
// 	scroll-margin-block: 5ex;
// }

// /* General Styling */

// body {
// 	font-family: var(--font-family-body);
// 	margin: 0;
// 	padding: 0;
// }

// /* Navigation */

// .primary-header {
// 	position: sticky;
// 	z-index: 9999;
// 	top: 0;
// 	width: 100%;
// 	padding-left: 5vw;
// 	padding-right: 5vw;
// 	padding-top: 1.25rem;
// 	padding-bottom: 1.25rem;
// 	height: 80px;
// 	border-bottom: 1px solid var(--color-primary-500);
// 	background-color: white;
// }

// .nav-wrapper {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// }

// .nav-list {
// 	font-size: var(--font-size-nav);
// 	display: flex;
// 	align-items: center;
// 	gap: clamp(var(--size-400), 5vw, var(--size-600));
// 	font-weight: var(--font-weight-bold);
// }

// .nav-item {
// 	list-style: none;
// }
// .nav-item a {
// 	text-decoration: none;
// 	color: var(--color-neutral-900);
// 	font-weight: var(--font-weight-bold);
// }

// .nav-item a:hover,
// .nav-item a:focus {
// 	color: var(--color-primary-500);
// }

// .nav-logo img {
// 	max-width: 10rem;
// 	height: auto; /* Maintain aspect ratio */
// }

// /* Input Box */

// .inputBox {
// 	width: 100%;
// 	margin-bottom: var(--size-200);
// }

// .inputBox-wrapper {
// 	position: relative;
// 	display: flex;
// 	align-items: center;
// 	width: 100%;
// }

// .inputBox-input {
// 	width: 100%;
// 	border-radius: var(--size-500);
// 	padding: var(--size-400);
// 	padding-left: var(--size-700); /* Ensure this is enough space for the icon */
// 	background-color: var(--color-neutral-200);
// 	border: 1px solid var(--color-neutral-300);
// 	box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
// 	transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */
// }

// .inputBox-input:focus {
// 	background-color: transparent;
// 	border-color: var(--color-primary-500);
// 	outline: none;
// }

// .inputBox-icon {
// 	position: absolute;
// 	left: 1rem;
// 	pointer-events: none;
// }

// .inputBox-icon--password {
// 	right: 1rem;
// 	cursor: pointer;
// 	left: auto;
// 	pointer-events: auto; /* Allow clicking on the eye icon */
// }

// input:disabled,
// input:disabled ~ .inputBox-icon {
// 	opacity: 0.5;
// }

// /* Adding the class for the eye icon specifically */
// .inputBox .fi-rr-eye {
// 	left: auto;
// 	right: 1rem;
// 	cursor: pointer;
// }

// .inputBox-validation {
// 	color: var(--color-accent-600);
// 	font-size: var(--font-size-300);
// 	margin-top: var(--size-100);
// }

// /* Checkbox */

// .checkbox {
// 	display: flex;
// 	align-items: center;
// 	margin-top: var(--size-400);
// }

// /* Styles for the checkbox label */
// .checkbox-label {
// 	display: flex;
// 	align-items: center;
// 	cursor: pointer;
// 	font-size: var(--font-size-body);
// 	color: var(--color-neutral-900);
// }

// /* Styles for the checkbox input */
// .checkbox-input {
// 	margin-right: var(--size-200);
// 	position: relative;
// 	width: 1.25rem; /* Adjusted width */
// 	height: 1.25rem; /* Adjusted height */
// 	appearance: none;
// 	background-color: var(--color-neutral-100);
// 	border: 2px solid var(--color-primary-500);
// 	border-radius: 0.25rem;
// 	cursor: pointer;
// }

// .checkbox-input:checked {
// 	background-color: var(--color-primary-500);
// 	border-color: var(--color-primary-500);
// }

// .checkbox-input:checked::after {
// 	content: '';
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%) rotate(45deg);
// 	width: 0.4rem; /* Adjusted width */
// 	height: 0.7rem; /* Adjusted height */
// 	border: solid white;
// 	border-width: 0 0.15rem 0.15rem 0;
// }

// /* Auth Form */
// .authForm {
// 	padding: var(--size-400) 10vw;
// 	min-height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }

// .authForm-form {
// 	width: 100%;
// 	max-width: 400px;
// }

// .authForm-title {
// 	font-size: var(--font-size-800);
// 	font-weight: var(--font-weight-bold);
// 	line-height: var(--size-650);
// 	text-align: center;
// 	text-transform: capitalize;
// 	margin-bottom: var(--size-700);
// 	color: var(--color-primary-500);
// }

// .authForm-seperator {
// 	display: flex;
// 	align-items: center;
// 	gap: var(--size-200);
// 	width: 100%;
// 	position: relative;
// 	margin-top: var(--size-650);
// 	margin-bottom: var(--size-650);
// 	font-weight: var(--font-weight-bold);
// 	color: var(--color-primary-900);
// 	text-transform: uppercase;
// 	opacity: 0.7;
// }

// .authForm-seperator::before,
// .authForm-seperator::after {
// 	content: '';
// 	flex: 1;
// 	border-bottom: 1px solid var(--color-primary-700);
// }

// .authForm-text {
// 	margin-top: var(--size-500);
// 	color: var(--color-neutral-900);
// 	font-size: var(--font-size-600);
// 	text-align: center;
// }

// .authForm-link {
// 	color: var(--color-primary-500);
// 	text-decoration: underline;
// 	margin-left: var(--size-100);
// }

// /* Button */

// .button {
// 	display: inline-block;
// 	padding: var(--size-300) var(--size-500);
// 	margin-top: var(--size-400);
// 	border-radius: var(--size-500);
// 	font-size: var(--font-size-button);
// 	font-weight: var(--font-weight-semi-bold);
// 	text-align: center;
// 	text-transform: uppercase;
// 	cursor: pointer;
// 	transition: background-color 0.3s ease;
// 	border: none; /* Move this to the base button class */
// 	color: white;
// }

// .button:disabled {
// 	opacity: 0.5;
// 	cursor: not-allowed;
// }

// .button-primary {
// 	background-color: var(--color-primary-500);
// }

// .button-primary:hover,
// .button-primary:focus {
// 	background-color: var(--color-primary-700);
// }

// .button-logout {
// 	padding: var(--size-200) var(--size-400); /* Specific to logout button */
// 	font-size: var(--font-size-nav);
// 	text-transform: capitalize;
// 	background-color: var(--color-accent-500);
// 	margin-top: 0;
// }

// .button-logout:hover,
// .button-logout:focus {
// 	background-color: var(--color-accent-700);
// }

// /* Textarea */
// .textarea {
// 	width: 100%;
// 	margin-bottom: var(--size-200);
// }

// .textarea-input {
// 	width: 100%;
// 	border-radius: var(--size-500);
// 	padding: var(--size-400);
// 	background-color: var(--color-neutral-200);
// 	border: 1px solid var(--color-neutral-300);
// 	transition: background-color 0.3s, border-color 0.3s;
// 	resize: vertical; /* Allow vertical resizing */
// }

// .textarea-input:focus {
// 	background-color: transparent;
// 	border-color: var(--color-primary-500);
// 	outline: none;
// }

// /* Select */
// .select {
// 	position: relative;
// 	width: 100%;
// 	margin-bottom: var(--size-200);
// }

// .select-input {
// 	width: 100%;
// 	border-radius: var(--size-500);
// 	padding: var(--size-400);
// 	padding-right: 2.5rem; /* Ensure space for the dropdown icon */
// 	background-color: var(--color-neutral-200);
// 	border: 1px solid var(--color-neutral-300);
// 	transition: background-color 0.3s, border-color 0.3s;
// 	appearance: none; /* Remove default dropdown arrow */
// }

// .select-input:focus {
// 	background-color: transparent;
// 	border-color: var(--color-primary-500);
// 	outline: none;
// }

// .select-icon {
// 	position: absolute;
// 	right: 1rem;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	pointer-events: none; /* Ensure the icon does not block clicks */
// 	color: var(--icon-color);
// 	font-size: 1.25rem;
// 	transition: color 0.3s;
// }

// .select-input:hover ~ .select-icon,
// .select-input:focus ~ .select-icon {
// 	color: var(--icon-color-hover);
// }

// .select-input option:disabled {
// 	color: var(--color-neutral-600);
// }

// /* Icon  */

// .icon {
// 	margin-left: var(--size-300);
// 	cursor: pointer;
// 	font-size: var(--font-size-650);
// 	color: var(--color-primary-500);
// }

// .icon:hover {
// 	color: var(--color-primary-700);
// }

// .icon--delete {
// 	color: var(--color-accent-500);
// }

// .icon--delete:hover {
// 	color: var(--color-accent-700);
// }

// /* Create Route Page */

// .createRoute {
// 	position: relative;
// 	height: calc(100vh - 80px);
// 	width: 100vw;
// }

// .createRoute-sidebar {
// 	position: absolute;
// 	margin: var(--size-500);
// 	width: 25%;
// 	height: calc(100% - var(--size-500) * 2);
// 	padding: var(--size-400);
// 	box-sizing: border-box;
// 	overflow-y: auto;
// 	background-color: var(--color-neutral-100);
// 	z-index: 1000;
// 	border-radius: var(--size-500);
// }

// .createRoute-map {
// 	width: 100%;
// 	height: 100%;
// 	position: relative; /* Ensure the map covers the whole container */
// }

// .createRoute-title {
// 	font-size: var(--font-size-700);
// 	font-weight: var(--font-weight-bold);
// 	margin-bottom: var(--size-400);
// 	margin-top: var(--size-400);
// 	text-align: center;
// 	color: var(--color-primary-800);
// }

// .createRoute-description {
// 	font-size: var(--font-size-500);
// 	margin-bottom: var(--size-400);
// 	color: var(--color-neutral-900);
// }

// .createRoute-waypoint {
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	margin-bottom: var(--size-400);
// }

// .createRoute-button,
// .createRoute-buttonInstructions {
// 	padding: var(--size-200) var(--size-400);
// 	font-size: var(--font-size-nav);
// 	background-color: var(--color-primary-500);
// 	margin-top: var(--size-300);
// 	margin-bottom: var(--size-300);
// 	text-align: center;
// 	text-transform: none;
// }

// .createRoute-buttonShare {
// 	padding: var(--size-300) var(--size-400);
// 	font-size: var(--font-size-500);
// 	width: 75%;
// 	background-color: var(--color-primary-800);
// }

// .createRoute-button:hover,
// .createRoute-button:focus {
// 	background-color: var(--color-primary-700);
// }

// .createRoute-buttonInstructions {
// 	background-color: var(--color-accent-500);
// }

// .createRoute-buttonInstructions:hover,
// .createRoute-buttonInstructions:focus {
// 	background-color: var(--color-accent-700);
// }

// /* Map */
// .map-container {
// 	height: 100%;
// 	width: 100%;
// }

// /* AutoComplete */

// .autoComplete {
// 	position: relative;
// 	width: 100%;
// }

// .autoComplete ul {
// 	list-style: none;
// 	padding: 0;
// 	margin: 0;
// }

// .autoComplete-suggestions {
// 	position: absolute;
// 	top: 100%;
// 	left: 0;
// 	right: 0;
// 	max-height: 20rem;
// 	overflow-y: auto;
// 	background: var(--color-neutral-100);
// 	border: 2px solid var(--color-neutral-500);
// 	border-top: none;
// 	border-radius: var(--size-500);
// 	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// 	z-index: 1000;
// }

// .autoComplete-suggestion {
// 	padding: 8px;
// 	cursor: pointer;
// 	border-bottom: 1px solid var(--color-neutral-500);
// }

// .autoComplete-suggestion:hover {
// 	background: var(--color-neutral-300);
// }

// /* Route Post Card */
// .route-card {
// 	border: 1px solid var(--color-neutral-300);
// 	border-radius: var(--size-500);
// 	padding: var(--size-400);
// 	margin-bottom: var(--size-400);
// 	background: var(--color-neutral-100);
// 	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
// }

// .route-card-header {
// 	display: flex;
// 	align-items: center;
// 	margin-bottom: var(--size-400);
// }

// .route-card-profile-picture {
// 	border-radius: 50%;
// 	width: var(--size-700);
// 	height: var(--size-700);
// 	margin-right: var(--size-400);
// }

// .route-card-title {
// 	margin: 0;
// 	font-size: var(--font-size-600);
// 	color: var(--color-neutral-900);
// }

// .route-card-subtitle {
// 	margin: 0;
// 	font-size: var(--font-size-400);
// 	color: var(--color-neutral-600);
// }

// .route-card-details {
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	height: 100%;
// }

// .route-card-details-box {
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	justify-content: center;
// 	background-color: var(--color-neutral-300);
// 	padding: var(--size-200);
// 	margin-bottom: var(--size-200);
// 	gap: var(--size-200);
// 	border: 1px solid var(--color-neutral-400);
// 	border-radius: var(--size-500);
// 	text-wrap: nowrap;
// }

// .route-card-details-key {
// 	margin: 0;
// 	font-size: var(--font-size-500);
// 	color: var(--color-neutral-700);
// }

// .route-card-details-value {
// 	margin-top: 0;
// 	margin-bottom: var(--size-200);
// 	font-weight: var(--font-weight-bold);
// 	font-size: var(--font-size-600);
// 	color: var(--color-neutral-900);
// }

// .route-card-description {
// 	font-size: var(--font-size-500);
// 	margin: var(--size-400) 0;
// 	color: var(--color-neutral-800);
// }

// .route-card-actions {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	margin-top: var(--size-400);
// 	margin-inline: var(--size-400);
// }

// .route-card-actions-box {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	gap: var(--size-200);
// 	color: var(--color-neutral-700);
// 	transition: color 0.3s;
// }

// .route-card-actions-logo {
// 	cursor: pointer;
// 	font-size: var(--font-size-650);
// 	color: inherit;
// 	transition: color 0.3s;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }

// .route-card-actions-logo i {
// 	line-height: 1; /* Ensure line-height doesn't affect alignment */
// }

// .route-card-actions-logo:hover {
// 	color: var(--color-primary-700);
// }

// .route-card-actions-count {
// 	font-size: var(--font-size-500);
// 	display: flex;
// 	align-items: center;
// 	color: inherit;
// }

// .route-card-actions-box--liked {
// 	color: var(--color-primary-700);
// }

// .route-card-map-container {
// 	height: 100%;
// 	width: 100%;
// 	border-radius: var(--size-500);
// }

// .route-card-map-main {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	height: 20rem;
// 	gap: var(--size-400);
// }

// /* Feed */
// .feed-container {
// 	padding: var(--size-400);
// 	max-width: 50rem;
// 	margin: 0 auto;
// }

// /* Utility classes */

// .container {
// 	--max-width: 1110px;
// 	--padding: 1rem;

// 	width: min(var(--max-width), 100% - (var(--padding) * 2));
// 	margin-inline: auto;
// }

// .center {
// 	display: block;
// 	margin-left: auto;
// 	margin-right: auto;
// }

// .color-primary-900 {
// 	color: var(--color-primary-900);
// }

// frontend\src\routes.jsx:
// import { AuthLayout } from './pages/auth/AuthLayout'
// import { Login } from './pages/auth/Login'
// import { Register } from './pages/auth/Register'
// import { Feed } from './pages/feed/Feed'
// import MainLayout from './components/layout/MainLayout'
// import PersistLogin from './features/auth/PersistLogin'
// import CreateRoute from './pages/routes/CreateRoute'

// const routes = [
// 	{
// 		element: <PersistLogin />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <MainLayout />,
// 				children: [
// 					{
// 						index: true,
// 						element: <Feed />,
// 					},
// 					{
// 						path: 'create-route',
// 						element: <CreateRoute />,
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		path: '/auth',
// 		element: <AuthLayout />,
// 		children: [
// 			{
// 				path: 'login',
// 				element: <Login />,
// 			},
// 			{
// 				path: 'register',
// 				element: <Register />,
// 			},
// 		],
// 	},
// ]

// export default routes


// frontend\src\main.jsx:
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// import { store } from './app/store.js'
// import { Provider } from 'react-redux'

// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<BrowserRouter>
// 				<App />
// 			</BrowserRouter>
// 		</Provider>
// 	</React.StrictMode>
// )


// frontend\.eslintrc.cjs:
// module.exports = {
// 	root: true,
// 	env: {
// 	  browser: true,
// 	  es2020: true,
// 	  node: true, // Add this line to include the Node.js environment
// 	},
// 	extends: [
// 	  'eslint:recommended',
// 	  'plugin:react/recommended',
// 	  'plugin:react/jsx-runtime',
// 	  'plugin:react-hooks/recommended',
// 	],
// 	ignorePatterns: ['dist', '.eslintrc.cjs'],
// 	parserOptions: {
// 	  ecmaVersion: 'latest',
// 	  sourceType: 'module',
// 	},
// 	settings: {
// 	  react: {
// 		version: '18.2',
// 	  },
// 	},
// 	plugins: ['react-refresh'],
// 	rules: {
// 	  'react/jsx-no-target-blank': 'off',
// 	  'react-refresh/only-export-components': [
// 		'warn',
// 		{ allowConstantExport: true },
// 	  ],
// 	  'react/prop-types': 'off',
// 	},
//   };
  