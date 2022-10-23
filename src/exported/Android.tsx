import IconAndroidFill0Wght100Grad0Opsz48 from '../components/AndroidFill0Wght100Grad0Opsz48'
import IconAndroidFill0Wght200Grad0Opsz48 from '../components/AndroidFill0Wght200Grad0Opsz48'
import IconAndroidFill0Wght300Grad0Opsz48 from '../components/AndroidFill0Wght300Grad0Opsz48'
import IconAndroidFill0Wght400Grad0Opsz48 from '../components/AndroidFill0Wght400Grad0Opsz48'
import IconAndroidFill0Wght500Grad0Opsz48 from '../components/AndroidFill0Wght500Grad0Opsz48'
import IconAndroidFill0Wght600Grad0Opsz48 from '../components/AndroidFill0Wght600Grad0Opsz48'
import IconAndroidFill0Wght700Grad0Opsz48 from '../components/AndroidFill0Wght700Grad0Opsz48'
import IconAndroidFill1Wght100Grad0Opsz48 from '../components/AndroidFill1Wght100Grad0Opsz48'
import IconAndroidFill1Wght200Grad0Opsz48 from '../components/AndroidFill1Wght200Grad0Opsz48'
import IconAndroidFill1Wght300Grad0Opsz48 from '../components/AndroidFill1Wght300Grad0Opsz48'
import IconAndroidFill1Wght400Grad0Opsz48 from '../components/AndroidFill1Wght400Grad0Opsz48'
import IconAndroidFill1Wght500Grad0Opsz48 from '../components/AndroidFill1Wght500Grad0Opsz48'
import IconAndroidFill1Wght600Grad0Opsz48 from '../components/AndroidFill1Wght600Grad0Opsz48'
import IconAndroidFill1Wght700Grad0Opsz48 from '../components/AndroidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAndroid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAndroidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAndroidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAndroidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAndroidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAndroidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAndroidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAndroidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAndroidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAndroidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAndroidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAndroidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAndroidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAndroidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAndroidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
