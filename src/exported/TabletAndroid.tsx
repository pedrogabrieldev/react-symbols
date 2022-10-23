import IconTabletAndroidFill0Wght100Grad0Opsz48 from '../components/TabletAndroidFill0Wght100Grad0Opsz48'
import IconTabletAndroidFill0Wght200Grad0Opsz48 from '../components/TabletAndroidFill0Wght200Grad0Opsz48'
import IconTabletAndroidFill0Wght300Grad0Opsz48 from '../components/TabletAndroidFill0Wght300Grad0Opsz48'
import IconTabletAndroidFill0Wght400Grad0Opsz48 from '../components/TabletAndroidFill0Wght400Grad0Opsz48'
import IconTabletAndroidFill0Wght500Grad0Opsz48 from '../components/TabletAndroidFill0Wght500Grad0Opsz48'
import IconTabletAndroidFill0Wght600Grad0Opsz48 from '../components/TabletAndroidFill0Wght600Grad0Opsz48'
import IconTabletAndroidFill0Wght700Grad0Opsz48 from '../components/TabletAndroidFill0Wght700Grad0Opsz48'
import IconTabletAndroidFill1Wght100Grad0Opsz48 from '../components/TabletAndroidFill1Wght100Grad0Opsz48'
import IconTabletAndroidFill1Wght200Grad0Opsz48 from '../components/TabletAndroidFill1Wght200Grad0Opsz48'
import IconTabletAndroidFill1Wght300Grad0Opsz48 from '../components/TabletAndroidFill1Wght300Grad0Opsz48'
import IconTabletAndroidFill1Wght400Grad0Opsz48 from '../components/TabletAndroidFill1Wght400Grad0Opsz48'
import IconTabletAndroidFill1Wght500Grad0Opsz48 from '../components/TabletAndroidFill1Wght500Grad0Opsz48'
import IconTabletAndroidFill1Wght600Grad0Opsz48 from '../components/TabletAndroidFill1Wght600Grad0Opsz48'
import IconTabletAndroidFill1Wght700Grad0Opsz48 from '../components/TabletAndroidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTabletAndroid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTabletAndroidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTabletAndroidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTabletAndroidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTabletAndroidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTabletAndroidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTabletAndroidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTabletAndroidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTabletAndroidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTabletAndroidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTabletAndroidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTabletAndroidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTabletAndroidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTabletAndroidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTabletAndroidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
