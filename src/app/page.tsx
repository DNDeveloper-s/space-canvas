'use client';

import EditCanvas from '@/components/EditCanvas';
import EditTools from '@/components/EditTools';
import React from 'react';

export default function Home() {

	return (
		<div>
			<div className='relative mx-auto w-[85vw] h-screen bg-gray-400'>
				<EditCanvas />
			</div>
		</div>
	)
}