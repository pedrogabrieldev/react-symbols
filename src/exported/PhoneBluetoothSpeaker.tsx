import IconPhoneBluetoothSpeakerFill0Wght100Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght100Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght200Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght200Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght300Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght300Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght400Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght400Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght500Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght500Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght600Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght600Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill0Wght700Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill0Wght700Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght100Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght100Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght200Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght200Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght300Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght300Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght400Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght400Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght500Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght500Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght600Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght600Grad0Opsz48'
import IconPhoneBluetoothSpeakerFill1Wght700Grad0Opsz48 from '../components/PhoneBluetoothSpeakerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneBluetoothSpeaker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneBluetoothSpeakerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneBluetoothSpeakerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneBluetoothSpeakerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneBluetoothSpeakerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneBluetoothSpeakerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneBluetoothSpeakerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneBluetoothSpeakerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneBluetoothSpeakerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneBluetoothSpeakerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneBluetoothSpeakerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneBluetoothSpeakerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneBluetoothSpeakerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneBluetoothSpeakerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneBluetoothSpeakerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
