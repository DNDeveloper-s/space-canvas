import React, {ForwardedRef, forwardRef, useEffect, useLayoutEffect, useRef, WheelEventHandler} from 'react';
import Image from 'next/image';
import {useAnimationFrame} from 'framer-motion';
import Link from 'next/link';
// import useUniqueChapters from '../hooks/useUniqueChapters';
// import {appGooglePlayLink} from '../helpers/index';

const str = `[{"lecture_item_count":1,"chapter_id":"class_9_learn_englishbasics_englishreading_strategydevelopment","serial_order":3,"hex_color":"#505254","generic_name":"strategy development","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishbasics%2Fsubject%2Fclass_9_learn_englishbasics_englishreading%2Fchapter%2Fclass_9_learn_englishbasics_englishreading_strategydevelopment%2Fillustration.png?alt=media&token=b5a77f93-05ee-46a3-8952-77bc7f307155","chapter_number":3,"description":"Tricks and tips to conquer your next exam!","chapter_name":"Strategy Development","subjectImage":{"image":{"src":"/_next/static/media/literature.0afe1d71.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/literatureBg.e4c98fc8.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"literature"},"subject":{"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishbasics%2Fsubject%2Fclass_9_learn_englishbasics_englishreading%2Fillustration.jpg?alt=media&token=8b3a61b1-749d-41c7-84b0-2f871852e5ee","description":"The art of reading quickly and understanding correctly is the art to succeed in life. So let's get to it!","hex_color":"#bbd2e9","serial_order":1,"generic_name":"reading","subject_name":"Reading","updated_on":1628851328804,"subject_id":"class_9_learn_englishbasics_englishreading","main_thumbnail_url":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishbasics%2Fsubject%2Fclass_9_learn_englishbasics_englishreading%2Fmain_image.jpg?alt=media&token=71fee776-46cb-41d6-95f7-5371c991d88b"},"url":"/guest_classroom?subject=maths&chapter=class_9_learn_englishbasics_englishreading_strategydevelopment"},{"chapter_id":"class_9_learn_englishgrammar_basicgrammar_verbs","chapter_number":5,"hex_color":"#FFD8A3","description":"Words that express physical or mental actions.","serial_order":5,"generic_name":"verbs","chapter_name":"Verbs","lecture_item_count":19,"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishgrammar%2Fsubject%2Fclass_9_learn_englishgrammar_basicgrammar%2Fchapter%2Fclass_9_learn_englishgrammar_basicgrammar_verbs%2Fmain_image.jpg?alt=media&token=9d02380c-20f1-4db8-9f8c-3cf6bc2eb95c","subjectImage":{"image":{"src":"/_next/static/media/grammar.3ac7c2d1.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/grammarBg.9ce89895.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"grammar"},"subject":{"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishgrammar%2Fsubject%2Fclass_9_learn_englishgrammar_basicgrammar%2Fmain_image.jpg?alt=media&token=afd12c23-4cf8-4957-872a-cabe7011e55e","subject_id":"class_9_learn_englishgrammar_basicgrammar","serial_order":1,"generic_name":"basic grammar","hex_color":"#bbd2e9","updated_on":1625037518183,"description":"","subject_name":"Basic Grammar"},"url":"/guest_classroom?subject=maths&chapter=class_9_learn_englishgrammar_basicgrammar_verbs"},{"generic_name":"reach for the top","lecture_item_count":10,"chapter_name":"Reach for the Top","hex_color":"#ed9dc3","serial_order":9,"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishliterature%2Fsubject%2Fclass_9_learn_englishliterature_beehivechapters%2Fchapter%2Fclass_9_learn_englishliterature_beehivechapters_reachforthetop%2Fmain_image.jpg?alt=media&token=6e9cfd68-dac6-4187-a3de-ff0cd90a8dc2","chapter_number":8,"description":"Story of Mountain Climber Santosh Yadav's life.","chapter_id":"class_9_learn_englishliterature_beehivechapters_reachforthetop","subjectImage":{"image":{"src":"/_next/static/media/literature.0afe1d71.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/literatureBg.e4c98fc8.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"literature"},"subject":{"subject_name":"Beehive Chapters","generic_name":"beehive chapters","description":"","serial_order":2,"hex_color":"#bbd2e9","subject_id":"class_9_learn_englishliterature_beehivechapters","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_englishliterature%2Fsubject%2Fclass_9_learn_englishliterature_beehivechapters%2Fmain_image.jpg?alt=media&token=754db436-1427-4176-91b4-30c8777cbe1a","updated_on":1629803282226},"url":"/guest_classroom?subject=maths&chapter=class_9_learn_englishliterature_beehivechapters_reachforthetop"},{"generic_name":"probability","serial_order":15,"chapter_id":"class_9_learn_maths_probability","chapter_number":15,"hex_color":"#7e2d41","chapter_name":"Probability","description":"Chances of you clicking here? Hint: 100%! Test Probability.","lecture_item_count":29,"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_maths%2Fsubject%2Fclass_9_learn_maths%2Fchapter%2Fclass_9_learn_maths_probability%2Fmain_image.jpg?alt=media&token=63a407c4-c9c9-4e04-a9d8-b999735fa03d","subjectImage":{"image":{"src":"/_next/static/media/maths.fc3798c4.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/mathsBg.453adfab.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"maths"},"subject":{"updated_on":1631097697291,"mini_thumbnail_url":null,"serial_order":2,"generic_name":"maths","subject_id":"class_9_learn_maths","description":"The subject is much more than numbers, shapes and patterns. It teaches us art of problem-solving with logic.","main_thumbnail_url":null,"subject_name":"Maths"},"url":"/guest_classroom?subject=maths&chapter=class_9_learn_maths_probability"},{"chapter_number":2,"hex_color":"#bbd2e9","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_science%2Fsubject%2Fclass_9_learn_science_naturalresources%2Fchapter%2Fclass_9_learn_science_naturalresources_improvementinfoodresources%2Fmain_image.jpg?alt=media&token=8d31dec5-c7cf-41b8-a868-2be506f7c4b2","chapter_id":"class_9_learn_science_naturalresources_improvementinfoodresources","chapter_name":"Improvement In Food Resources","serial_order":2,"description":"","generic_name":"improvement in food resources","lecture_item_count":41,"subjectImage":{"image":{"src":"/_next/static/media/physics.6f256ce1.svg","height":683,"width":683,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/physicsBg.002842a0.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"natural resources"},"subject":{"generic_name":"natural resources","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_9%2Fscope%2Fclass_9_learn%2Fcategory%2Fclass_9_learn_science%2Fsubject%2Fclass_9_learn_science_naturalresources%2Fmain_image.jpg?alt=media&token=7e66c069-0cf1-4421-b10c-9823e0e20f6d","hex_color":"#bbd2e9","description":"","serial_order":4,"updated_on":1629803501920,"subject_id":"class_9_learn_science_naturalresources","subject_name":"Natural Resources"},"url":"/guest_classroom?subject=maths&chapter=class_9_learn_science_naturalresources_improvementinfoodresources"},{"serial_order":8,"chapter_name":"The Hack Driver","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_english%2Fsubject%2Fclass_10_learn_english_footprintswithoutfeet%2Fchapter%2Fclass_10_learn_english_footprintswithoutfeet_thehackdriver%2Fmain_image.jpg?alt=media&token=32c2078e-8283-4a7c-9177-6a5e825b6f18","chapter_number":8,"chapter_id":"class_10_learn_english_footprintswithoutfeet_thehackdriver","description":"Story on trust that got Sinclair Lewis his Nobel Prize","generic_name":"the hack driver","lecture_item_count":12,"hex_color":"#d6d6d6","subjectImage":{"image":{"src":"/_next/static/media/literature.0afe1d71.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/literatureBg.e4c98fc8.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"literature"},"subject":{"description":"","hex_color":"#bbd2e9","serial_order":3,"generic_name":"footprints without feet","subject_name":"Footprints without Feet","updated_on":1631600599571,"subject_id":"class_10_learn_english_footprintswithoutfeet","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_english%2Fsubject%2Fclass_10_learn_english_footprintswithoutfeet%2Fmain_image.jpg?alt=media&token=781ba955-365a-4bfb-9077-f7e9ea81e687"},"url":"/guest_classroom?subject=maths&chapter=class_10_learn_english_footprintswithoutfeet_thehackdriver"},{"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_englishbasics%2Fsubject%2Fclass_10_learn_englishbasics_writing%2Fchapter%2Fclass_10_learn_englishbasics_writing_introductiontowriting%2Fillustration.png?alt=media&token=39dc9e1e-c9ac-4f64-81eb-f2a2b9cb56fb","serial_order":1,"chapter_number":1,"chapter_id":"class_10_learn_englishbasics_writing_introductiontowriting","hex_color":"#505254","generic_name":"introduction to writing","chapter_name":"Introduction to Writing","description":"Lets exercise our minds and understand how to write!","lecture_item_count":1,"subjectImage":{"image":{"src":"/_next/static/media/literature.0afe1d71.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/literatureBg.e4c98fc8.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"literature"},"subject":{"generic_name":"writing","serial_order":2,"subject_name":"Writing","subject_id":"class_10_learn_englishbasics_writing","hex_color":"#bbd2e9","updated_on":1631602402955,"main_thumbnail_url":null,"mini_thumbnail_url":null,"illustration_art":null,"description":"In the smartphone era, we write as much as we talk. The subject helps us master putting our imagination to words."},"url":"/guest_classroom?subject=maths&chapter=class_10_learn_englishbasics_writing_introductiontowriting"},{"chapter_id":"class_10_learn_englishgrammar_functionalgrammar_phrasesclauses","lecture_item_count":11,"chapter_number":6,"hex_color":"#C8EDE3","description":"Presence of subject and verb makes a clause, absence makes a phrase.","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_englishgrammar%2Fsubject%2Fclass_10_learn_englishgrammar_functionalgrammar%2Fchapter%2Fclass_10_learn_englishgrammar_functionalgrammar_phrasesclauses%2Fmain_image.jpg?alt=media&token=1c653f9f-babf-40d4-a060-781ab940bece","serial_order":6,"chapter_name":"Phrases & Clauses","generic_name":"phrases & clauses","subjectImage":{"image":{"src":"/_next/static/media/grammar.3ac7c2d1.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/grammarBg.9ce89895.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"grammar"},"subject":{"hex_color":"#bbd2e9","subject_name":"Functional Grammar","subject_id":"class_10_learn_englishgrammar_functionalgrammar","generic_name":"functional grammar","main_thumbnail_url":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_englishgrammar%2Fsubject%2Fclass_10_learn_englishgrammar_functionalgrammar%2Fmain_image.jpg?alt=media&token=d22999b1-626d-4359-a0d5-4d43fc1855a2","updated_on":1625053510604,"serial_order":2,"description":"","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_englishgrammar%2Fsubject%2Fclass_10_learn_englishgrammar_functionalgrammar%2Fillustration.jpg?alt=media&token=73d7c5de-6381-4c1f-bfde-b754f70ce45f"},"url":"/guest_classroom?subject=maths&chapter=class_10_learn_englishgrammar_functionalgrammar_phrasesclauses"},{"lecture_item_count":84,"generic_name":"pair of linear equations in two variables","illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_mathematics%2Fsubject%2Fclass_10_learn_mathematics%2Fchapter%2Fclass_10_learn_mathematics_pairoflinearequationsintwovariables%2Fmain_image.jpg?alt=media&token=cd504c7f-59cb-41bd-9e82-8793fe875f7a","chapter_id":"class_10_learn_mathematics_pairoflinearequationsintwovariables","description":"Familiarise with the bond between graphs and mathematical expressions.","serial_order":3,"chapter_name":"Pair of Linear Equations in Two Variables","chapter_number":3,"hex_color":"#ae65b2","subjectImage":{"image":{"src":"/_next/static/media/maths.fc3798c4.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/mathsBg.453adfab.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"maths"},"subject":{"illustration_art":"","hex_color":"","updated_on":1631596370256,"subject_id":"class_10_learn_mathematics","description":"The subject is much more than numbers, shapes and patterns. It teaches us art of problem-solving with logic.","subject_name":"Maths","generic_name":"maths","serial_order":5},"url":"/guest_classroom?subject=maths&chapter=class_10_learn_mathematics_pairoflinearequationsintwovariables"},{"generic_name":"sources of energy","lecture_item_count":43,"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_science%2Fsubject%2Fclass_10_learn_science_naturalresources%2Fchapter%2Fclass_10_learn_science_naturalresources_sourcesofenergy%2Fmain_image.jpg?alt=media&token=2f53e6ee-af69-4261-90ce-f71d284af4bb","chapter_number":1,"hex_color":"#D1C2F4","description":"From food to petroleum, energy is everything. Check your battery.","serial_order":1,"chapter_name":"Sources of Energy","chapter_id":"class_10_learn_science_naturalresources_sourcesofenergy","subjectImage":{"image":{"src":"/_next/static/media/physics.6f256ce1.svg","height":683,"width":683,"blurWidth":0,"blurHeight":0},"bg":{"src":"/_next/static/media/physicsBg.002842a0.svg","height":200,"width":200,"blurWidth":0,"blurHeight":0},"key":"natural resources"},"subject":{"illustration_art":"https://firebasestorage.googleapis.com/v0/b/avian-display-193502.appspot.com/o/cms_data%2Fclass_10%2Fscope%2Fclass_10_learn%2Fcategory%2Fclass_10_learn_science%2Fsubject%2Fclass_10_learn_science_naturalresources%2Fmain_image.jpg?alt=media&token=2beb91cd-7c56-4e72-89c3-9a5791af5b85","hex_color":"#bbd2e9","updated_on":1629088459720,"subject_name":"Natural Resources","serial_order":4,"description":"","generic_name":"natural resources","subject_id":"class_10_learn_science_naturalresources"},"url":"/guest_classroom?subject=maths&chapter=class_10_learn_science_naturalresources_sourcesofenergy"}]`

const listItems = []

const _paraListItems = [{
	id: '1',
	text: 'This app is excellent for study purpose. Here u are provided with many video lecture and live class as well. It follow NCERT. PuStack make easy to understand.',
	author: '@Maitray Sinha',
	rating: 5,
}, {
	id: '2',
	text: 'The teacher explains very well and makes chapter interesting',
	author: "@Prapti Pathak",
	rating: 5,
}, {
	id: '3',
	text: 'Best app for 9 and 10 at free of cost better than byjus trust me',
	author: '@Ayush Mishra',
	rating: 4.5,
},{
	id: '11',
	text: 'Very nice learning app. I would say the best for video lectures. I have a advice please make these videos little bit not too much little bit longer, because the lectures only tells the main concept not other examples. I love it!',
	author: '@Raj Das',
	rating: 5,
}, {
	id: '21',
	text: 'This app is very nice ☺️ and it is very beneficial to me it helps me in study I can watch free videos without any payment ❤️ thank you PuStack',
	author: "@Sanchita Odomodiya",
	rating: 4.5,
}, {
	id: '31',
	text: 'This app is one of the best study platform it helps me alot,After studying by the teachers of this platform i can teach that topic to my friends Really in this app there is wonderful teachers',
	author: '@Kiran Devi Singh',
	rating: 4.5,
},{
	id: '12',
	text: 'The education quality is best. I understood every topic from this app easily with the help of animated video lectures. This is the best education app especially for Social Science.\n',
	author: '@Ram Singhal',
	rating: 5,
}, {
	id: '22',
	text: 'One of the best app i had never seen because of that the way the cleared the doubt is perfect...🤩 ( I wish this app will start soon for class 11th lectures )....🍁💕',
	author: "@Baba Muzzi",
	rating: 5,
}, {
	id: '32',
	text: 'Best app❤❤❤❤❤❤ But it\'s my huge and big request to make videos of class 11th PCB ALSO... ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤its great app in comparing to byjus vedantu.. But it have not any videos for class 11 and 12th batches.. Please starts sessions for this classes too!!',
	author: '@Parikshit Boss',
	rating: 5,
}]

const paraListItems = [{
	id: '1',
	text: 'Explained very nicely and in easy way and also becomes easy to remember after seeing videos',
	author: '@Shah Jinali',
	rating: 5,
}, {
	id: '2',
	text: 'The teacher explains very well and makes chapter interesting',
	author: "@Prapti Pathak",
	rating: 4.5,
}, {
	id: '3',
	text: 'Best app for 9 and 10 at free of cost better than byjus trust me',
	author: '@Ayush Mishra',
	rating: 5,
},{
	id: '11',
	text: 'very good exprience for learning and teachers are teach very well.underdtanding of topic is easly',
	author: '@Kumkum Gupta',
	rating: 5,
}, {
	id: '21',
	text: 'I love this app best app for tentiees',
	author: "@Gunjan Soni",
	rating: 5,
}, {
	id: '31',
	text: 'Love this app...this app helps me to understand all the concepts in very easy way...💓❤️‍🩹🥰',
	author: '@Chhavi Pihu',
	rating: 4.5,
},{
	id: '12',
	text: 'Best app in ed-tech industry. Teaching quality is awesome.',
	author: '@Shailesh Kumar Gaud',
	rating: 5,
}, {
	id: '22',
	text: 'Best app for learning They make us understand the concept easils.',
	author: "@Taha vlogs",
	rating: 5,
}, {
	id: '32',
	text: 'Nice learning pletform for indian student Best of luck and use this learning app',
	author: '@Maa Moni',
	rating: 4.5,
}]

function LiComponent({src, header, avatarSrc, hex, avatarName, skill, description, url = '', ...props}) {
	return (
		<li className="carousel-imaged-ul-li">
			<Link href={url} className="carousel-imaged-item">
				<div className="carousel-imaged-item-header">
					<span className={'pb-3'}>{header}</span>
				</div>
				<span className="carousel-imaged-item-image">
          <span className="carousel-imaged-item-image-holder">
            <Image className="carousel-imaged-item-image-holder" width={368} height={208} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27368%27%20height=%27208%27/%3e" alt={''} />
          </span>
          <Image style={{backgroundColor: hex}} className="carousel-imaged-item-image-item" width={400} height={400} src={src} alt=""/>
        </span>

				<div className="carousel-imaged-item-bottom">
					<div className="carousel-imaged-item-bottom-row">
						<div className="carousel-imaged-item-bottom-avatar">
							<div className="carousel-imaged-item-bottom-avatar-image">
	              <span className="carousel-imaged-item-bottom-avatar-image-holder">
	                <Image width={36} height={36} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" alt="" />
	              </span>
								<div>
									<Image className="carousel-imaged-item-bottom-avatar-image-item" width={80} height={80} src={avatarSrc.image} alt={""} />
									<Image className="carousel-imaged-item-bottom-avatar-image-bg" width={80} height={80} src={avatarSrc.bg} alt={""} />
								</div>
							</div>
							<span className="carousel-imaged-item-bottom-avatar-name">{avatarName}</span>
						</div>
						<span className="carousel-imaged-item-bottom-skill">{skill}</span>
					</div>
					<span className="carousel-imaged-item-bottom-hidden">{description}</span>
				</div>
			</Link>
		</li>
	)
}
interface InitObject {
	x: number;
	vx: number;
	ax: number;
}

const ULComponent = forwardRef(function ULComponent(props, ref: ForwardedRef<HTMLUListElement>) {
	// const ref = useRef<HTMLUListElement>(null);
	const chapters = JSON.parse(str);

	// useEffect(() => {
	// 	console.log('chapters - ', chapters);
	// }, [chapters])

	// id: '1',
	// src: CoverImage,
	// header: 'The GPT Times',
	// avatarSrc: ProfileImage,
	// avatarName: 'eriks-studio',
	// skill: 'AI'
	const getClassName = (grade) => {
		const splitted = grade.split("_");

		return (
			splitted[0].charAt(0).toUpperCase() +
			splitted[0].slice(1) +
			" " +
			splitted[1]
		);
	};

	const _listItems = chapters ? chapters.map(chapter => ({
		id: chapter.chapter_id,
		src: chapter.illustration_art,
		header: chapter.chapter_name,
		avatarSrc: chapter.subjectImage,
		hex: chapter.hex_color,
		avatarName: chapter.subject.subject_name,
		skill: getClassName(chapter.chapter_id),
		description: chapter.description,
		url: chapter.url,
	})) : listItems;

	return (
		<ul ref={ref} className="carousel-imaged-ul">
			{_listItems.map(_props => <LiComponent key={_props.id} {..._props} />)}
		</ul>
	)
});

function LiCommentComponent({text, author, rating}) {
	return (
		<Link target={"_blank"} href={'#'} className="carousel-comment-list-item !h-[199px] cursor-pointer">
			<div className={"w-full h-full relative bg-gray-950 rounded-[inherit] z-20 overflow-hidden "}>
				<div className="absolute flex items-center justify-center bottom-0 translate-y-3/4 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square">
					{/*<div style={{backgroundColor: '#cc2525'}} className="absolute inset-0 translate-z-0 rounded-full blur-[50px] opacity-70"></div>*/}
				</div>
				<div className="flex flex-col gap-3 justify-between text-white p-4 h-full">
					<p>{text}</p>
					<div className="flex justify-between">
						<p>{author}</p>
						{/*<StarRatings*/}
						{/*	name="rating"*/}
						{/*	rating={rating}*/}
						{/*	starSpacing="2px"*/}
						{/*	numberOfStars={5}*/}
						{/*	starDimension="10px"*/}
						{/*	svgIconPath={starPath}*/}
						{/*	starRatedColor="#fec107"*/}
						{/*	starHoverColor="#fec107"*/}
						{/*	svgIconViewBox="0 0 207.802 207.748"*/}
						{/*/>*/}
					</div>
				</div>
			</div>
			<div className=" " >

			</div>
		</Link>
	)
}

const ULCommentComponent = forwardRef(function ULComponent(props, ref: ForwardedRef<HTMLUListElement>) {
	// const ref = useRef<HTMLUListElement>(null);
	// const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });


	return (
		<ul ref={ref} className="carousel-comment-ul">
			{(_paraListItems).map(_props => <LiCommentComponent key={_props.id} {..._props} />)}
		</ul>
	)
});

const LandingScrollSection = () => {
	const init = useRef<InitObject>({x: 4180, vx: 0.4, ax: 0})
	const initComment = useRef<InitObject>({x: 3792, vx: -0.4, ax: 0})
	const ref = useRef<HTMLUListElement>(null);
	const ref1 = useRef<HTMLUListElement>(null);
	const ref2 = useRef<HTMLUListElement>(null);
	const ref3 = useRef<HTMLUListElement>(null);
	const ref4 = useRef<HTMLUListElement>(null);
	const ref5 = useRef<HTMLUListElement>(null);
	const stopRef = useRef<boolean>(false);
	const stopRefComment = useRef<boolean>(false);


	function handleMouseEnter(e, isComment) {
		if(isComment) {
			// stopRefComment.current = true;
			return;
		}
		// stopRef.current = true;
	}

	useLayoutEffect(() => {
		if(ref.current) init.current.x = ref.current.clientWidth;

		if(ref3.current) initComment.current.x = ref3.current.clientWidth;
	}, [])

	// useAnimationFrame((time, delta) => {
	// 	if(ref.current && ref1.current && ref2.current && !stopRef.current) {
	// 		const width = ref.current.clientWidth;
	// 		{
	// 			const _init = init.current;
	// 			_init.vx += _init.ax;
	//
	// 			_init.x += _init.vx;
	//
	// 			if (_init.x >= (ref.current.clientWidth * 2)) _init.x = ref.current.clientWidth;
	// 			if (_init.x <= 0) _init.x = ref.current.clientWidth;
	//
	// 			ref.current.style.transform = `translateX(-${_init.x}px)`;
	// 			ref1.current.style.transform = `translateX(-${_init.x}px)`;
	// 			ref2.current.style.transform = `translateX(-${_init.x}px)`;
	// 		}
	// 	}
	//
	// 	if(!ref3.current || !ref4.current || !ref5.current || stopRefComment.current) return;
	// 	{
	// 		const _init = initComment.current;
	// 		_init.vx += _init.ax;
	//
	// 		_init.x += _init.vx;
	//
	// 		if(_init.x >= (ref3.current.clientWidth * 2)) _init.x = ref3.current.clientWidth;
	// 		if(_init.x <= 0) _init.x = ref3.current.clientWidth;
	//
	// 		ref3.current.style.transform = `translateX(-${_init.x}px)`;
	// 		ref4.current.style.transform = `translateX(-${_init.x}px)`;
	// 		ref5.current.style.transform = `translateX(-${_init.x}px)`;
	// 	}
	// })

	useLayoutEffect(() => {
		if(ref.current) init.current.x = ref.current.clientWidth;

		if(ref3.current) initComment.current.x = ref3.current.clientWidth;
	}, [])

	useEffect(() => {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
				|| window[vendors[x]+'CancelRequestAnimationFrame'];
		}

		let id = 0;
		if (!window.requestAnimationFrame)
		{ // @ts-ignore
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				id = window.setTimeout(function() { callback(currTime + timeToCall); },
					timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}

		function draw() {
			if(ref.current && ref1.current && ref2.current && !stopRef.current) {
				const width = ref.current.clientWidth;
				{
					const _init = init.current;
					_init.vx += _init.ax;

					_init.x += _init.vx;

					if (_init.x >= (ref.current.clientWidth * 2)) _init.x = ref.current.clientWidth;
					if (_init.x <= 0) _init.x = ref.current.clientWidth;

					ref.current.style.transform = `translateX(-${_init.x}px)`;
					ref1.current.style.transform = `translateX(-${_init.x}px)`;
					ref2.current.style.transform = `translateX(-${_init.x}px)`;
				}
			}

			if(!ref3.current || !ref4.current || !ref5.current || stopRefComment.current) return;
			{
				const _init = initComment.current;
				_init.vx += _init.ax;

				_init.x += _init.vx;

				if(_init.x >= (ref3.current.clientWidth * 2)) _init.x = ref3.current.clientWidth;
				if(_init.x <= 0) _init.x = ref3.current.clientWidth;

				ref3.current.style.transform = `translateX(-${_init.x}px)`;
				ref4.current.style.transform = `translateX(-${_init.x}px)`;
				ref5.current.style.transform = `translateX(-${_init.x}px)`;
			}
			requestAnimationFrame(draw);
		}

		requestAnimationFrame(draw);

		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};

		return () => {
			window.cancelAnimationFrame(id);
		}
	}, [])


	const handleWheel = (e: any, isComment: boolean) => {
		e.preventDefault();
		if(isComment) {
			stopRefComment.current = false;
			let _vx = e.deltaX;
			if(_vx < 0.4 && _vx >= 0) _vx = 0.4;
			if(_vx > -0.4 && _vx <= 0) _vx = -0.4;
			initComment.current.vx = _vx;
			return;
		}
		stopRef.current = false;
		console.log('e - ', e.deltaX)
		let _vx = e.deltaX;
		if(_vx < 0.4 && _vx >= 0) _vx = 0.4;
		if(_vx > -0.4 && _vx <= 0) _vx = -0.4;
		init.current.vx = _vx;
	}

	const handleMouseLeave = (e, isComment: boolean) => {
		if(isComment) {
			stopRefComment.current = false;
			initComment.current.vx = -0.4;
			return;
		}
		stopRef.current = false;
		init.current.vx = 0.4;
	}

	return (
		<div className="main-content">
			<div className={"main-content-header"}>
				<h2 className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-[#c70000] to-[#ffd8d8] pb-3">Join thousands of passionate students</h2>
				<div className="main-content-header-subitem">
					{/*<span>Learn from*/}
					{/*	<span className="highlight"> lectures</span> and*/}
					{/*	<span className="highlight"> written solutions</span>.</span>*/}
					<span className="z-[10000000000] font-medium bg-clip-text !text-transparent bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60 pb-4">Collaborate with tutors for deeper understanding of concepts</span>
					{/*<span><span className="highlight">Desktop</span>, <span className="highlight"> phone</span>, and <span className="highlight"> tablet</span>. Learn from any device.</span>*/}
				</div>
			</div>
			<div className="ul-holder">
				<div className="ul-holder-item" style={{overscrollBehaviorX: 'none'}}>
					<div className="carousel-holder" onMouseEnter={e => handleMouseEnter(e, false)} onMouseLeave={e => handleMouseLeave(e, false)} onWheel={handleWheel}>
						<ULComponent ref={ref} />
						<ULComponent ref={ref1} />
						<ULComponent ref={ref2} />
					</div>
				</div>
				<div className="ul-holder-item" style={{overscrollBehaviorX: 'none'}}>
					<div className="carousel-holder" onMouseEnter={e => handleMouseEnter(e, true)} onMouseLeave={e => handleMouseLeave(e, true)} onWheel={e => handleWheel(e, true)}>
						<div>
							<ULCommentComponent ref={ref3} />
						</div>
						<ULCommentComponent ref={ref4} />
						<ULCommentComponent ref={ref5} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingScrollSection;
