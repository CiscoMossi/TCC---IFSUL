import React from 'react'
import { View, Animated, TextInput } from 'react-native'

import styles from './style'

const interpolateStart = 0
const interpolateEnd = 1

const initialPosition = {
  fontSize: 20,
  topPosition: 22,
}

const finalPosition = {
  fontSize: 16,
  topPosition: 0,
}

export class DBTextInput extends React.PureComponent {
  state = {
    isFocused: false,
    alert: false,
  }

  componentDidUpdate() {
    const isValueEmpty = this.isFieldEmpty()
    const focusedPostion = this.state.isFocused || !isValueEmpty

    Animated.timing(this._animatedIsFocused, {
      toValue: focusedPostion ? interpolateEnd : interpolateStart,
      duration: 200,
    }).start()
  }

  componentWillMount() {
    const emptyInput = this.isFieldEmpty()

    this._animatedIsFocused = new Animated.Value(
      !emptyInput ? interpolateEnd : interpolateStart,
    )
  }

  isFieldEmpty = () =>
    !this.props.value

  isInputInvalid = () => {
    return this.props.isForm && this.props.meta.error && this.props.meta.touched
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })
  toggleAlert = () => this.setState({ alert: !this.state.alert })

  mapFloatLabelStyle = (blurColor, focusColor) => ({
    top: this._animatedIsFocused.interpolate({
      inputRange: [interpolateStart, interpolateEnd],
      outputRange: [initialPosition.topPosition, finalPosition.topPosition],
    }),
    fontSize: this._animatedIsFocused.interpolate({
      inputRange: [interpolateStart, interpolateEnd],
      outputRange: [initialPosition.fontSize, finalPosition.fontSize],
    }),
    color: this._animatedIsFocused.interpolate({
      inputRange: [interpolateStart, interpolateEnd],
      outputRange: [blurColor, focusColor],
    }),
  })

  mapStackLabelStyle = (blurColor, focusColor) => ({
    top: finalPosition.topPosition,
    color: this._animatedIsFocused.interpolate({
      inputRange: [interpolateStart, interpolateEnd],
      outputRange: [blurColor, focusColor],
    }),
  })

  renderLabel = (label, style, labelMapStyle) => (
    <Animated.Text
      style={[
        styles.label,
        labelMapStyle(
          this.props.onBlurColor,
          this.props.onFocusColor,
        ),
        style,
      ]}
    >
      {label}
    </Animated.Text>
  )

  handleLabelRender = (label, style, float) =>
    float
      ? this.renderLabel(label, style, this.mapFloatLabelStyle)
      : this.renderLabel(label, style, this.mapStackLabelStyle)

  renderRight = (right, rightIconIfValid) => {
    const rightIconAndValidInput =
      rightIconIfValid && this.props.meta.dirty && !this.props.meta.error
    if (rightIconAndValidInput) {
      return rightIconIfValid
    }

    return right
  }

  render() {
    const {
      containerStyle,
      sectionStyle,
      labelStyle,
      inputStyle,
      right,
      onBlurBorderColor,
      onFocusColor,
      onFocus,
      onBlur,
      label,
      placeholder,
      onChangeText,
      onSubmitEditing,
      float,
      input,
      help,
      secureTextEntry,
      multiline,
      keyboardType,
      maxLength,
      rightIconIfValid,
      autoFocus,
      autoCapitalize,
      editable,
      selectTextOnFocus,
      inputRef,
      invalid
    } = this.props
    const inputStyleForComponent = { ...inputStyle }
    const labelStyleForComponent = { ...labelStyle }

    let labelMessage = label
    let borderColor = this.state.isFocused ? onFocusColor : onBlurBorderColor

    if (invalid) {
      borderColor = inputStyleForComponent.color = labelStyleForComponent.color = "#ff0000"
    }

    return (
      <View style={[styles.container, containerStyle]}>
        <View
          style={[
            styles.section,
            sectionStyle,
            { borderBottomColor: borderColor },
          ]}
        >
          {label &&
            this.handleLabelRender(labelMessage, labelStyleForComponent, float)}
          
          <TextInput
            {...input}
            onFocus={onFocus ? onFocus : this.handleFocus}
            onBlur={onBlur ? onBlur : this.handleBlur}
            underlineColorAndroid="transparent"
            style={[styles.input, inputStyleForComponent]}
            placeholder={placeholder}
            placeholderTextColor="#8E39AA"
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoFocus={autoFocus}
            multiline={multiline}
            keyboardType={keyboardType}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            editable={editable}
            selectTextOnFocus={selectTextOnFocus}
            ref={inputRef}
          />
          
          {this.renderRight(right, rightIconIfValid)}
        </View>

        {help && <View style={styles.feedbackMessages}>{help}</View>}
      </View>
    )
  }
}