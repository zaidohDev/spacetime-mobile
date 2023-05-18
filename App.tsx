import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <View className="rounded-2xl bg-gray-900 p-6 shadow-lg shadow-slate-100">
        <Text className="text-5xl font-bold text-gray-50 shadow-md ">
          🐱CatTom
        </Text>
        <Text className="text-center text-sm text-blue-100">
          App developed by Daniel 📱
        </Text>
        <StatusBar style="light" translucent />
      </View>
    </View>
  )
}
