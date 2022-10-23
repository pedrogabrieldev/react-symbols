import IconDataSaverOnFill0Wght100Grad0Opsz48 from '../components/DataSaverOnFill0Wght100Grad0Opsz48'
import IconDataSaverOnFill0Wght200Grad0Opsz48 from '../components/DataSaverOnFill0Wght200Grad0Opsz48'
import IconDataSaverOnFill0Wght300Grad0Opsz48 from '../components/DataSaverOnFill0Wght300Grad0Opsz48'
import IconDataSaverOnFill0Wght400Grad0Opsz48 from '../components/DataSaverOnFill0Wght400Grad0Opsz48'
import IconDataSaverOnFill0Wght500Grad0Opsz48 from '../components/DataSaverOnFill0Wght500Grad0Opsz48'
import IconDataSaverOnFill0Wght600Grad0Opsz48 from '../components/DataSaverOnFill0Wght600Grad0Opsz48'
import IconDataSaverOnFill0Wght700Grad0Opsz48 from '../components/DataSaverOnFill0Wght700Grad0Opsz48'
import IconDataSaverOnFill1Wght100Grad0Opsz48 from '../components/DataSaverOnFill1Wght100Grad0Opsz48'
import IconDataSaverOnFill1Wght200Grad0Opsz48 from '../components/DataSaverOnFill1Wght200Grad0Opsz48'
import IconDataSaverOnFill1Wght300Grad0Opsz48 from '../components/DataSaverOnFill1Wght300Grad0Opsz48'
import IconDataSaverOnFill1Wght400Grad0Opsz48 from '../components/DataSaverOnFill1Wght400Grad0Opsz48'
import IconDataSaverOnFill1Wght500Grad0Opsz48 from '../components/DataSaverOnFill1Wght500Grad0Opsz48'
import IconDataSaverOnFill1Wght600Grad0Opsz48 from '../components/DataSaverOnFill1Wght600Grad0Opsz48'
import IconDataSaverOnFill1Wght700Grad0Opsz48 from '../components/DataSaverOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataSaverOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataSaverOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataSaverOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataSaverOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataSaverOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataSaverOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataSaverOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataSaverOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataSaverOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataSaverOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataSaverOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataSaverOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataSaverOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataSaverOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataSaverOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
