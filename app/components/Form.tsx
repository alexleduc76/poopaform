"use client"
import { useState, useEffect } from 'react'

type FormProps = {
	name: string
}

const Form = (props: FormProps) => {

	useEffect(() => {
		console.log(`props`, props)
	}, [ props ])

	return <div></div>
}

export default Form