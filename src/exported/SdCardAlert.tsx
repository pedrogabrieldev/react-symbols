import IconSdCardAlertFill0Wght100Grad0Opsz48 from '../components/SdCardAlertFill0Wght100Grad0Opsz48'
import IconSdCardAlertFill0Wght200Grad0Opsz48 from '../components/SdCardAlertFill0Wght200Grad0Opsz48'
import IconSdCardAlertFill0Wght300Grad0Opsz48 from '../components/SdCardAlertFill0Wght300Grad0Opsz48'
import IconSdCardAlertFill0Wght400Grad0Opsz48 from '../components/SdCardAlertFill0Wght400Grad0Opsz48'
import IconSdCardAlertFill0Wght500Grad0Opsz48 from '../components/SdCardAlertFill0Wght500Grad0Opsz48'
import IconSdCardAlertFill0Wght600Grad0Opsz48 from '../components/SdCardAlertFill0Wght600Grad0Opsz48'
import IconSdCardAlertFill0Wght700Grad0Opsz48 from '../components/SdCardAlertFill0Wght700Grad0Opsz48'
import IconSdCardAlertFill1Wght100Grad0Opsz48 from '../components/SdCardAlertFill1Wght100Grad0Opsz48'
import IconSdCardAlertFill1Wght200Grad0Opsz48 from '../components/SdCardAlertFill1Wght200Grad0Opsz48'
import IconSdCardAlertFill1Wght300Grad0Opsz48 from '../components/SdCardAlertFill1Wght300Grad0Opsz48'
import IconSdCardAlertFill1Wght400Grad0Opsz48 from '../components/SdCardAlertFill1Wght400Grad0Opsz48'
import IconSdCardAlertFill1Wght500Grad0Opsz48 from '../components/SdCardAlertFill1Wght500Grad0Opsz48'
import IconSdCardAlertFill1Wght600Grad0Opsz48 from '../components/SdCardAlertFill1Wght600Grad0Opsz48'
import IconSdCardAlertFill1Wght700Grad0Opsz48 from '../components/SdCardAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSdCardAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSdCardAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSdCardAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSdCardAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSdCardAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSdCardAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSdCardAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSdCardAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSdCardAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSdCardAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSdCardAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSdCardAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSdCardAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSdCardAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSdCardAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
