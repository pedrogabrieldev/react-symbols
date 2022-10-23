import IconPartlyCloudyDayFill0Wght100Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght100Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght200Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght200Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght300Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght300Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght400Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght400Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght500Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght500Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght600Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght600Grad0Opsz48'
import IconPartlyCloudyDayFill0Wght700Grad0Opsz48 from '../components/PartlyCloudyDayFill0Wght700Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght100Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght100Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght200Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght200Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght300Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght300Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght400Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght400Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght500Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght500Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght600Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght600Grad0Opsz48'
import IconPartlyCloudyDayFill1Wght700Grad0Opsz48 from '../components/PartlyCloudyDayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPartlyCloudyDay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPartlyCloudyDayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPartlyCloudyDayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPartlyCloudyDayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPartlyCloudyDayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPartlyCloudyDayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPartlyCloudyDayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPartlyCloudyDayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPartlyCloudyDayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPartlyCloudyDayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPartlyCloudyDayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPartlyCloudyDayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPartlyCloudyDayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPartlyCloudyDayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPartlyCloudyDayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
