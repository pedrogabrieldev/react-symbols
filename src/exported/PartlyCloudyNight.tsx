import IconPartlyCloudyNightFill0Wght100Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght100Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght200Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght200Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght300Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght300Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght400Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght400Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght500Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght500Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght600Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght600Grad0Opsz48'
import IconPartlyCloudyNightFill0Wght700Grad0Opsz48 from '../components/PartlyCloudyNightFill0Wght700Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght100Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght100Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght200Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght200Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght300Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght300Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght400Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght400Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght500Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght500Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght600Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght600Grad0Opsz48'
import IconPartlyCloudyNightFill1Wght700Grad0Opsz48 from '../components/PartlyCloudyNightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPartlyCloudyNight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPartlyCloudyNightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPartlyCloudyNightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPartlyCloudyNightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPartlyCloudyNightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPartlyCloudyNightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPartlyCloudyNightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPartlyCloudyNightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPartlyCloudyNightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPartlyCloudyNightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPartlyCloudyNightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPartlyCloudyNightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPartlyCloudyNightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPartlyCloudyNightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPartlyCloudyNightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
