import IconViewDayFill0Wght100Grad0Opsz48 from '../components/ViewDayFill0Wght100Grad0Opsz48'
import IconViewDayFill0Wght200Grad0Opsz48 from '../components/ViewDayFill0Wght200Grad0Opsz48'
import IconViewDayFill0Wght300Grad0Opsz48 from '../components/ViewDayFill0Wght300Grad0Opsz48'
import IconViewDayFill0Wght400Grad0Opsz48 from '../components/ViewDayFill0Wght400Grad0Opsz48'
import IconViewDayFill0Wght500Grad0Opsz48 from '../components/ViewDayFill0Wght500Grad0Opsz48'
import IconViewDayFill0Wght600Grad0Opsz48 from '../components/ViewDayFill0Wght600Grad0Opsz48'
import IconViewDayFill0Wght700Grad0Opsz48 from '../components/ViewDayFill0Wght700Grad0Opsz48'
import IconViewDayFill1Wght100Grad0Opsz48 from '../components/ViewDayFill1Wght100Grad0Opsz48'
import IconViewDayFill1Wght200Grad0Opsz48 from '../components/ViewDayFill1Wght200Grad0Opsz48'
import IconViewDayFill1Wght300Grad0Opsz48 from '../components/ViewDayFill1Wght300Grad0Opsz48'
import IconViewDayFill1Wght400Grad0Opsz48 from '../components/ViewDayFill1Wght400Grad0Opsz48'
import IconViewDayFill1Wght500Grad0Opsz48 from '../components/ViewDayFill1Wght500Grad0Opsz48'
import IconViewDayFill1Wght600Grad0Opsz48 from '../components/ViewDayFill1Wght600Grad0Opsz48'
import IconViewDayFill1Wght700Grad0Opsz48 from '../components/ViewDayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewDay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewDayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewDayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewDayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewDayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewDayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewDayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewDayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewDayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewDayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewDayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewDayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewDayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewDayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewDayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
