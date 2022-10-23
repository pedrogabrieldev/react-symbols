import IconAddHomeWorkFill0Wght100Grad0Opsz48 from '../components/AddHomeWorkFill0Wght100Grad0Opsz48'
import IconAddHomeWorkFill0Wght200Grad0Opsz48 from '../components/AddHomeWorkFill0Wght200Grad0Opsz48'
import IconAddHomeWorkFill0Wght300Grad0Opsz48 from '../components/AddHomeWorkFill0Wght300Grad0Opsz48'
import IconAddHomeWorkFill0Wght400Grad0Opsz48 from '../components/AddHomeWorkFill0Wght400Grad0Opsz48'
import IconAddHomeWorkFill0Wght500Grad0Opsz48 from '../components/AddHomeWorkFill0Wght500Grad0Opsz48'
import IconAddHomeWorkFill0Wght600Grad0Opsz48 from '../components/AddHomeWorkFill0Wght600Grad0Opsz48'
import IconAddHomeWorkFill0Wght700Grad0Opsz48 from '../components/AddHomeWorkFill0Wght700Grad0Opsz48'
import IconAddHomeWorkFill1Wght100Grad0Opsz48 from '../components/AddHomeWorkFill1Wght100Grad0Opsz48'
import IconAddHomeWorkFill1Wght200Grad0Opsz48 from '../components/AddHomeWorkFill1Wght200Grad0Opsz48'
import IconAddHomeWorkFill1Wght300Grad0Opsz48 from '../components/AddHomeWorkFill1Wght300Grad0Opsz48'
import IconAddHomeWorkFill1Wght400Grad0Opsz48 from '../components/AddHomeWorkFill1Wght400Grad0Opsz48'
import IconAddHomeWorkFill1Wght500Grad0Opsz48 from '../components/AddHomeWorkFill1Wght500Grad0Opsz48'
import IconAddHomeWorkFill1Wght600Grad0Opsz48 from '../components/AddHomeWorkFill1Wght600Grad0Opsz48'
import IconAddHomeWorkFill1Wght700Grad0Opsz48 from '../components/AddHomeWorkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddHomeWork = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddHomeWorkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddHomeWorkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddHomeWorkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddHomeWorkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddHomeWorkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddHomeWorkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddHomeWorkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddHomeWorkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddHomeWorkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddHomeWorkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddHomeWorkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddHomeWorkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddHomeWorkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddHomeWorkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
