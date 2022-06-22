import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RoomItem from './room/RoomItem';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../redux/actions/roomActions';

const Home = () => {
	const dispatch = useDispatch();
	const { rooms, error } = useSelector((state) => state.allRooms);
	console.log('ROOMS', rooms);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearErrors());
		}
	}, []);
	return (
		<section id="rooms" className="container mt-5">
			<h2 className="mb-3 ml-2 stays-heading">Stays in Helsinki</h2>

			<Link href="/search">
				<a className="ml-2 back-to-search">
					<i className="fa fa-arrow-left"></i> Back to Search
				</a>
			</Link>

			<div className="row">
				{rooms && rooms.length === 0 ? (
					<div className="alert alert-danger mt-5 w-100">
						<b>No Rooms.</b>
					</div>
				) : (
					rooms && rooms.map((room) => <RoomItem key={room._id} room={room} />)
				)}
			</div>
		</section>
	);
};

export default Home;
