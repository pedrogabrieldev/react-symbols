import IconInsertPageBreakFill0Wght100Grad0Opsz48 from '../components/InsertPageBreakFill0Wght100Grad0Opsz48'
import IconInsertPageBreakFill0Wght200Grad0Opsz48 from '../components/InsertPageBreakFill0Wght200Grad0Opsz48'
import IconInsertPageBreakFill0Wght300Grad0Opsz48 from '../components/InsertPageBreakFill0Wght300Grad0Opsz48'
import IconInsertPageBreakFill0Wght400Grad0Opsz48 from '../components/InsertPageBreakFill0Wght400Grad0Opsz48'
import IconInsertPageBreakFill0Wght500Grad0Opsz48 from '../components/InsertPageBreakFill0Wght500Grad0Opsz48'
import IconInsertPageBreakFill0Wght600Grad0Opsz48 from '../components/InsertPageBreakFill0Wght600Grad0Opsz48'
import IconInsertPageBreakFill0Wght700Grad0Opsz48 from '../components/InsertPageBreakFill0Wght700Grad0Opsz48'
import IconInsertPageBreakFill1Wght100Grad0Opsz48 from '../components/InsertPageBreakFill1Wght100Grad0Opsz48'
import IconInsertPageBreakFill1Wght200Grad0Opsz48 from '../components/InsertPageBreakFill1Wght200Grad0Opsz48'
import IconInsertPageBreakFill1Wght300Grad0Opsz48 from '../components/InsertPageBreakFill1Wght300Grad0Opsz48'
import IconInsertPageBreakFill1Wght400Grad0Opsz48 from '../components/InsertPageBreakFill1Wght400Grad0Opsz48'
import IconInsertPageBreakFill1Wght500Grad0Opsz48 from '../components/InsertPageBreakFill1Wght500Grad0Opsz48'
import IconInsertPageBreakFill1Wght600Grad0Opsz48 from '../components/InsertPageBreakFill1Wght600Grad0Opsz48'
import IconInsertPageBreakFill1Wght700Grad0Opsz48 from '../components/InsertPageBreakFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInsertPageBreak = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInsertPageBreakFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInsertPageBreakFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInsertPageBreakFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInsertPageBreakFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInsertPageBreakFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInsertPageBreakFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInsertPageBreakFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInsertPageBreakFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInsertPageBreakFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInsertPageBreakFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInsertPageBreakFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInsertPageBreakFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInsertPageBreakFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInsertPageBreakFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
