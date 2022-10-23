import IconAgricultureFill0Wght100Grad0Opsz48 from '../components/AgricultureFill0Wght100Grad0Opsz48'
import IconAgricultureFill0Wght200Grad0Opsz48 from '../components/AgricultureFill0Wght200Grad0Opsz48'
import IconAgricultureFill0Wght300Grad0Opsz48 from '../components/AgricultureFill0Wght300Grad0Opsz48'
import IconAgricultureFill0Wght400Grad0Opsz48 from '../components/AgricultureFill0Wght400Grad0Opsz48'
import IconAgricultureFill0Wght500Grad0Opsz48 from '../components/AgricultureFill0Wght500Grad0Opsz48'
import IconAgricultureFill0Wght600Grad0Opsz48 from '../components/AgricultureFill0Wght600Grad0Opsz48'
import IconAgricultureFill0Wght700Grad0Opsz48 from '../components/AgricultureFill0Wght700Grad0Opsz48'
import IconAgricultureFill1Wght100Grad0Opsz48 from '../components/AgricultureFill1Wght100Grad0Opsz48'
import IconAgricultureFill1Wght200Grad0Opsz48 from '../components/AgricultureFill1Wght200Grad0Opsz48'
import IconAgricultureFill1Wght300Grad0Opsz48 from '../components/AgricultureFill1Wght300Grad0Opsz48'
import IconAgricultureFill1Wght400Grad0Opsz48 from '../components/AgricultureFill1Wght400Grad0Opsz48'
import IconAgricultureFill1Wght500Grad0Opsz48 from '../components/AgricultureFill1Wght500Grad0Opsz48'
import IconAgricultureFill1Wght600Grad0Opsz48 from '../components/AgricultureFill1Wght600Grad0Opsz48'
import IconAgricultureFill1Wght700Grad0Opsz48 from '../components/AgricultureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAgriculture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAgricultureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAgricultureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAgricultureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAgricultureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAgricultureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAgricultureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAgricultureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAgricultureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAgricultureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAgricultureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAgricultureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAgricultureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAgricultureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAgricultureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
