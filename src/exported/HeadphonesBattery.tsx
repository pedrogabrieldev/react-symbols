import IconHeadphonesBatteryFill0Wght100Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght100Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght200Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght200Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght300Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght300Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght400Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght400Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght500Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght500Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght600Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght600Grad0Opsz48'
import IconHeadphonesBatteryFill0Wght700Grad0Opsz48 from '../components/HeadphonesBatteryFill0Wght700Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght100Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght100Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght200Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght200Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght300Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght300Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght400Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght400Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght500Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght500Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght600Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght600Grad0Opsz48'
import IconHeadphonesBatteryFill1Wght700Grad0Opsz48 from '../components/HeadphonesBatteryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeadphonesBattery = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeadphonesBatteryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeadphonesBatteryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeadphonesBatteryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeadphonesBatteryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeadphonesBatteryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeadphonesBatteryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeadphonesBatteryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeadphonesBatteryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeadphonesBatteryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeadphonesBatteryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeadphonesBatteryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeadphonesBatteryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeadphonesBatteryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeadphonesBatteryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
