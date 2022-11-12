import React, { HTMLProps, ReactNode, useCallback, useState } from 'react'

import { useField, FieldHookConfig } from 'formik'

import styles from './inputField.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement> {
  varient?: 'small' | 'large'
  icon?: ReactNode
}

const InputField = (props: FieldHookConfig<string> & InputProps) => {
  const [field, meta] = useField(props)
  const [inputType, setInputType] = useState(props.type)

  const handleChangeFieldType = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }, [inputType])

  return (
    <>
      <div className={`${styles.formField} ${props.className ?? ''}`}>
        {props.type !== 'textArea' ? (
          <input
            {...field}
            id={props.id || props.name}
            className={`${styles.customField} ${props.className ?? null} ${
              !props.placeholder ? styles.noPlaceHolder : null
            }`}
            type={inputType}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={field.value}
          />
        ) : (
          <textarea
            {...field}
            id={props.id || props.name}
            className={`${styles.customField} ${props.className ?? null} ${
              !props.placeholder ? styles.noPlaceHolder : null
            }`}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={field.value}
          />
        )}
        {props.placeholder && (
          <label htmlFor={props.id || props.name} className={`form-label ${styles.formLabel}`}>
            {props.placeholder}
          </label>
        )}
        {props.type === 'password' && (
          <button type="button" className={`btn ${styles.showHidePassword}`} onClick={handleChangeFieldType}>
            {inputType === 'password' ? <p>Show</p> : <p>Hide</p>}
          </button>
        )}
        {props.icon && <div className={styles.icon}>{props.icon}</div>}
      </div>
      {props.label && <p className={styles.fontSize}>{props.label}</p>}
      {/*{props.touched && meta.error ? (*/}
      {/*  <div className={styles.error}>{meta.error}</div>*/}
      {/*) : null}*/}
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </>
  )
}

export default InputField
