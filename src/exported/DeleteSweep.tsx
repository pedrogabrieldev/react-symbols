import IconDeleteSweepFill0Wght100Grad0Opsz48 from '../components/DeleteSweepFill0Wght100Grad0Opsz48'
import IconDeleteSweepFill0Wght200Grad0Opsz48 from '../components/DeleteSweepFill0Wght200Grad0Opsz48'
import IconDeleteSweepFill0Wght300Grad0Opsz48 from '../components/DeleteSweepFill0Wght300Grad0Opsz48'
import IconDeleteSweepFill0Wght400Grad0Opsz48 from '../components/DeleteSweepFill0Wght400Grad0Opsz48'
import IconDeleteSweepFill0Wght500Grad0Opsz48 from '../components/DeleteSweepFill0Wght500Grad0Opsz48'
import IconDeleteSweepFill0Wght600Grad0Opsz48 from '../components/DeleteSweepFill0Wght600Grad0Opsz48'
import IconDeleteSweepFill0Wght700Grad0Opsz48 from '../components/DeleteSweepFill0Wght700Grad0Opsz48'
import IconDeleteSweepFill1Wght100Grad0Opsz48 from '../components/DeleteSweepFill1Wght100Grad0Opsz48'
import IconDeleteSweepFill1Wght200Grad0Opsz48 from '../components/DeleteSweepFill1Wght200Grad0Opsz48'
import IconDeleteSweepFill1Wght300Grad0Opsz48 from '../components/DeleteSweepFill1Wght300Grad0Opsz48'
import IconDeleteSweepFill1Wght400Grad0Opsz48 from '../components/DeleteSweepFill1Wght400Grad0Opsz48'
import IconDeleteSweepFill1Wght500Grad0Opsz48 from '../components/DeleteSweepFill1Wght500Grad0Opsz48'
import IconDeleteSweepFill1Wght600Grad0Opsz48 from '../components/DeleteSweepFill1Wght600Grad0Opsz48'
import IconDeleteSweepFill1Wght700Grad0Opsz48 from '../components/DeleteSweepFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeleteSweep = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeleteSweepFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeleteSweepFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeleteSweepFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeleteSweepFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeleteSweepFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeleteSweepFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeleteSweepFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeleteSweepFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeleteSweepFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeleteSweepFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeleteSweepFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeleteSweepFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeleteSweepFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeleteSweepFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
