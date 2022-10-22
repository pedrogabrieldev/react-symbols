
  import SearchFilled100 from '../components/SearchFilled100'
  import SearchFilled200 from '../components/SearchFilled200'
  import SearchFilled300 from '../components/SearchFilled300'
  import SearchFilled400 from '../components/SearchFilled400'
  import SearchFilled500 from '../components/SearchFilled500'
  import SearchFilled600 from '../components/SearchFilled600'
  import SearchFilled700 from '../components/SearchFilled700'
  import SearchOutlined100 from '../components/SearchOutlined100'
  import SearchOutlined200 from '../components/SearchOutlined200'
  import SearchOutlined300 from '../components/SearchOutlined300'
  import SearchOutlined400 from '../components/SearchOutlined400'
  import SearchOutlined500 from '../components/SearchOutlined500'
  import SearchOutlined600 from '../components/SearchOutlined600'
  import SearchOutlined700 from '../components/SearchOutlined700'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const Search = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <SearchFilled100 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <SearchFilled200 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <SearchFilled300 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <SearchFilled400 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <SearchFilled500 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <SearchFilled600 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <SearchFilled700 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <SearchOutlined100 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <SearchOutlined200 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <SearchOutlined300 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <SearchOutlined400 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <SearchOutlined500 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <SearchOutlined600 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <SearchOutlined700 size={size} color={color} />
      default:
        return null
    }
  }
