import { View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const WhatTroublesYou = () => {
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [others, setOthers] = useState();

  // Problems
  const problems = [
    {
      name: 'Engine unable start',
      slug: 'engine-unable-start',
      src: require('../../assets/images/engine_unable_start.png')
    },
    {
      name: 'Break Failure',
      slug: 'break-failure',
      src: require('../../assets/images/brake_failure.png')
    },
    {
      name: 'Strange noise from engine',
      slug: 'strange-noise-from-engine',
      src: require('../../assets/images/strange_noise_engine.png')
    },
    {
      name: 'Strange noise from brake',
      slug: 'strange-noise-from-brake',
      src: require('../../assets/images/strange_noise_brake.png')
    },
    {
      name: 'Cooling system',
      slug: 'cooling-system',
      src: require('../../assets/images/cooling_system.png')
    },
    {
      name: 'Engine lights on',
      slug: 'engine-lights-on',
      src: require('../../assets/images/engine_lights_on.png')
    },
    {
      name: 'Suspension problem',
      slug: 'suspension-problem',
      src: require('../../assets/images/suspension_problem.png')
    },
    {
      name: 'Others',
      slug: 'others',
    },
    {}
  ];

  // Add problems when clicked
  const addProblems = (slug) => {
    // Remove
    if (selectedProblems.includes(slug)) {
      setSelectedProblems((prevSelectedProblems) =>
        prevSelectedProblems.filter((item) => item !== slug)
      );
      return ;
    }

    // Add
    setSelectedProblems([...selectedProblems, slug]);
  }

  // Component
  const TroubleComponent = ({ trouble }) => {
    return trouble.name ? (
      <TouchableHighlight 
        onPress={() => addProblems(trouble.slug)} 
        className={`w-[32%] mt-3 bg-[#4B515D] aspect-square rounded-2xl relative transition-all duration-200
          ${selectedProblems.includes(trouble.slug) && 'border-4 border-[#1FE89C]'}`}
      >
        <View className={`w-full h-full p-3 flex items-center justify-between`}>
          {/* Image */}
          <Image source={trouble.src} className="w-12 h-12" />
          {/* Name */}
          <Text className="text-center text-xs text-white font-bold"numberOfLines={2} style={{ lineHeight: 15 }}>
            {trouble.name}
          </Text>
          {/* Tick */}
          {selectedProblems.includes(trouble.slug) && (
            <View className="p-1 rounded-full bg-[#1FE89C] absolute -top-2 -right-2">
              <Feather name="check" size={20} color={'#ffffff'} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    )
    : (
      <View className="w-[32%]"></View>
    )
  }


  return (
      <View className="w-11/12 mx-auto">
        {/* Problems */}
        <FlatList 
          data={problems}
          numColumns={3}
          keyExtractor={item => item.name}
          renderItem={({item}) => <TroubleComponent trouble={item} />}
          columnWrapperStyle={{  justifyContent: 'space-between' }}
        />
        {/* Other reasons */}
        {selectedProblems.includes('others') && (
          <>
          <Text className="text-[#4B515D] text-lg font-bold mt-1">Describe your problem :</Text>
          <TextInput 
            multiline
            onChange={(val) => setOthers(val)}
            placeholder='Others'
            className="p-2 my-2 rounded-lg bg-gray-400 bg-transparent transition-all duration-200 border-2 
            border-gray-600" 
          />
          </>
        )}
      </View>
  )
}

export default WhatTroublesYou