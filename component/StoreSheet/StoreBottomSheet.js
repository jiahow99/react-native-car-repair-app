import { View, Text, TouchableOpacity } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useCallback } from 'react';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Service from './Service';
import Review from './Review';
import About from './About';
import { useState } from 'react';
import {GOOGLE_API_KEY} from '@env';

const StoreBottomSheet = forwardRef(({}, ref) => {
    const [store, setStore] = useState(null);

    useImperativeHandle(ref, () => {
        return {
            expand
        }
    })

    const bottomSheet = useRef(null);
    const snapPoints = useMemo(() => ['25%', '90%'], []);

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={0}
                appearsOnIndex={1}
            />
        )
    )

    const reviews = [
        {
            id: 1,
            rating: 5,
            comment: 'Write some good reviews Write some good reviews'
        },
        {
            id: 2,
            rating: 4,
            comment: 'Write some good reviews Write some good reviews'
        },
        {
            id: 3,
            rating: 2,
            comment: 'Write some good reviews Write some good reviews'
        }
    ]

    const handleClose = () => {
        bottomSheet.current.close();
    }

    const expand = (selectedStore) => {
        setStore(selectedStore);
        bottomSheet.current.expand();
    }

    return (
        <BottomSheet
            ref={bottomSheet}
            index={-1}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetScrollView>
                <View className="px-5">
                    {/* Close Button */}
                    <TouchableOpacity onPress={handleClose} className="ml-auto w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                        <MaterialIcons name="close" size={25} color='#ffffff' />
                    </TouchableOpacity>
                    {/* Images */}
                    {store?.photos
                    ? (
                        <Image 
                            source={{ 
                                uri: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${store.photos[0].photo_reference}&maxheight=300&key=${GOOGLE_API_KEY}`
                            }} 
                            className="w-full h-48 rounded-xl mt-3"    
                        />
                    ) : (
                        <Image 
                            source={require('../../assets/images/placeholder.jpg')} 
                            className="w-full h-48 rounded-xl mt-3"    
                        />
                    )}
                    {/* Name */}
                    <View className="flex flex-row items-center mt-3">
                        <Text className="font-bold text-xl">
                            { store?.name } - 0.5 km
                        </Text>
                        <MaterialIcons name="location-on" size={25} />
                    </View>
                    {/* About */}
                    <ScrollView horizontal className="mt-5">
                        <About name='Ratings' rate='4.5' />
                        <About name='Reviews' rate='390'  />
                        <About name='Respond Rate' rate='95 %' />
                    </ScrollView>
                    {/* Services */}
                    <View className="mt-5">
                        <Text className="text-lg font-bold">Services</Text>
                        <ScrollView 
                            horizontal 
                            className="mt-4" 
                            contentContainerStyle={{ columnGap: 5 }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Service name="Tyre Change" src={require('../../assets/icons/service_tyre_change.png')} />
                            <Service name="Request Mechanic" src={require('../../assets/icons/service_request_mechanic.png')} />
                            <Service name="Car Parts Store" src={require('../../assets/icons/service_store.png')} />
                        </ScrollView>
                    </View>
                    {/* Reviews */}
                    <View className="mt-5">
                        <Text className="text-lg font-bold">Reviews</Text>
                        <FlatList 
                            data={reviews}
                            renderItem={({item}) => <Review review={item} />}
                            keyExtractor={review => review.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ columnGap: 10 }}
                            className="mt-4"
                        />
                    </View>
                    {/* Confirm Button */}
                    <TouchableOpacity className="w-full bg-[#1FE89C] rounded-full py-3 my-3 mx-auto">
                        <Text className="w-fit tracking-widest mx-auto text-white text-xl font-bold">Confirm</Text>
                    </TouchableOpacity>
                </View>
                
            </BottomSheetScrollView>
        </BottomSheet>
    )
})


export default StoreBottomSheet