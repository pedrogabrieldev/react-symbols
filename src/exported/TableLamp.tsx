import IconTableLampFill0Wght100Grad0Opsz48 from '../components/TableLampFill0Wght100Grad0Opsz48'
import IconTableLampFill0Wght200Grad0Opsz48 from '../components/TableLampFill0Wght200Grad0Opsz48'
import IconTableLampFill0Wght300Grad0Opsz48 from '../components/TableLampFill0Wght300Grad0Opsz48'
import IconTableLampFill0Wght400Grad0Opsz48 from '../components/TableLampFill0Wght400Grad0Opsz48'
import IconTableLampFill0Wght500Grad0Opsz48 from '../components/TableLampFill0Wght500Grad0Opsz48'
import IconTableLampFill0Wght600Grad0Opsz48 from '../components/TableLampFill0Wght600Grad0Opsz48'
import IconTableLampFill0Wght700Grad0Opsz48 from '../components/TableLampFill0Wght700Grad0Opsz48'
import IconTableLampFill1Wght100Grad0Opsz48 from '../components/TableLampFill1Wght100Grad0Opsz48'
import IconTableLampFill1Wght200Grad0Opsz48 from '../components/TableLampFill1Wght200Grad0Opsz48'
import IconTableLampFill1Wght300Grad0Opsz48 from '../components/TableLampFill1Wght300Grad0Opsz48'
import IconTableLampFill1Wght400Grad0Opsz48 from '../components/TableLampFill1Wght400Grad0Opsz48'
import IconTableLampFill1Wght500Grad0Opsz48 from '../components/TableLampFill1Wght500Grad0Opsz48'
import IconTableLampFill1Wght600Grad0Opsz48 from '../components/TableLampFill1Wght600Grad0Opsz48'
import IconTableLampFill1Wght700Grad0Opsz48 from '../components/TableLampFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableLamp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableLampFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableLampFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableLampFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableLampFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableLampFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableLampFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableLampFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableLampFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableLampFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableLampFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableLampFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableLampFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableLampFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableLampFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
